import * as FileSystem from 'expo-file-system';
import * as Contacts from 'expo-contacts';

const contactsDir = `${FileSystem.documentDirectory}contacts`;

const onExeption = (cb,errorHandler) => {
  try {
    return cb();
  } catch(err){
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
}

export const writeToFile = async (file, location) => {
  onExeption(() => FileSystem.writeAsStringAsync)
}

export const deleteContact = async contact => {
  const str = contact.name;
  const validString = str.replace(/[^A-Za-z0-9\s-]/g, '');
  const string = validString.replace(/ /g,"_");
  const strName = string + "-" + contact.id + ".JSON";
  return onExeption(()=> FileSystem.deleteAsync(`${contactsDir}/${strName}`,{idempotent:true}));
};

export const addContact = async contact => {
  const str = contact.name;
  const validString = str.replace(/[^A-Za-z0-9\s-]/g, '');
  const string = validString.replace(/ /g,"_");
  const strName = string + "-" + contact.id + ".JSON";
  const jsonCon = JSON.stringify(contact);

  await onExeption(()=> FileSystem.writeAsStringAsync (`${contactsDir}/${strName}`,jsonCon));

  return{
    id:contact.id,
    name: contact.name,
    phone: contact.phone,
    image: contact.image,
  };
  }

const loadContacts = async(strName) => {
  const getCont = await FileSystem.readAsStringAsync(`${contactsDir}/${strName}`,);
return JSON.parse(getCont);
};

export const getAllContacts = async () => {
  await setupDirectory();
  const contactsResult = await onExeption(() =>FileSystem.readDirectoryAsync(contactsDir));
  return Promise.all(contactsResult.map(async (strName) => loadContacts(strName)));
};

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${contactsDir}/${fileName}`, {
          encoding: FileSystem.EncodingType.Base64
      }));
  }
const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDir);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDir);
  }
}
export const deleteAll = async () => {
  await FileSystem.deleteAsync(contactsDir);
}

// export const Data = async () => {
//   await setupDirectory();
//   const newContact = {name: contact.name, phone: contact.phone, image: contact.image};
//   const fileName = `${documentsDirectory}.json`;
//   await FileSystem.writeAsStringAsync(fileName, JSON.stringify(newContact));
//
//
// };
