import * as FileSystem from 'expo-file-system';
import * as Contacts from 'expo-contacts'

const contactsDir = `${FileSystem.documentsDirectory}contacts`;
console.log(FileSystem.readDirectoryAsync(contactsDir))
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

export const addContact = async contact => {
  const str = contact.name;
  const valid = str.replace(/\s/g,'')
  const validString = valid.replace(/[^A-Za-z0-9\s-]/g,'');
  const jsonCon = JSON.stringify(contact);
  await onExeption(()=> FileSystem.writeAsStringAsync(jsonCon, `${contactsDir}/${validvalidString}`));

  return{
    name: contact.name,
    phone: contact.phone,
    image: await loadImage(validString)
  };
  }

export const getAllContacts = async () => {
  await setupDirectory();
  //
  // const result = await FileSystem.readDirectoryAsync(contactsDir);
  //
  // return Promise.all(result.map(async filename => {
  //     return {
  //       name: contact.name,
  //       phone: contact.phone,
  //       image: await loadImage(validString)
  //     }
//   }
// ));
};

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${contactsDir}/${fileName}`, {
          encoding: FileSystem.EncodingType.Base64
      }));
  }
const setupDirectory = async () => {
  console.log(contactsDir)
  const dir = await FileSystem.getInfoAsync(contactsDir);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDir);
  }
}

// export const Data = async () => {
//   await setupDirectory();
//   const newContact = {name: contact.name, phone: contact.phone, image: contact.image};
//   const fileName = `${documentsDirectory}.json`;
//   await FileSystem.writeAsStringAsync(fileName, JSON.stringify(newContact));
//
//
// };
