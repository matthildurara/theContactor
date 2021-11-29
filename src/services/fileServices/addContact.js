import * as FileSystem from 'expo-file-system';

const contactsDir = '${FileSystem.documentsDirectory}contacts';

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsynx(contactsDir);
};

async function addContact(contact) {
  await setupDirectory();
  const newContact = { name:contact.name, phone:contact.phone, image:contact.image};

}
