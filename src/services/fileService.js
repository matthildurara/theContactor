import * as FileSystem from 'expo-file-system';

const contactsDir = `${FileSystem.documentsDirectory}contacts`;

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
  await onExeption(()=> FileSystem.writeAsStringAsync(jsonCon, `${contactsDir}/${validString}`));

  return{
    name: contact.name,
    phone: contact.phone,
    image: await loadImage(validString)
  };
  }

export const getAllContacts = async () => {
  await setupDirectory();
}

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
