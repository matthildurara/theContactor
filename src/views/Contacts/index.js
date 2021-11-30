import React, {useState,useEffect} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native';
//import logo from '../../resources/logo.png';
import styles from './styles';
import Toolbar from '../../components/toolbar';
import AddContactModal from '../../components/AddContactModal';
import * as fileService from '../../services/fileService';
import AllContacts from '../../components/AllContacts';
import uuid from 'react-native-uuid';




const Contacts = (navigation) => {

const [isAddModalOpen,setIsAddModalOpen] = useState(false);
const [contacts,setContacts]= useState([]);
const [searchString,setSearch]= useState('');
// const [name, setName]=useState('');
// const [phone, setPhone]=useState('');
// const [image, setImage]=useState([])

useEffect(()=> {
  (async () => {
    const contacts = await fileService.getAllContacts();
    setContacts(contacts);
    console.log(contacts);
  })();
},[]);

const addNewContact = async (name,phone,image) => {
  //  id :uuid.v4();
  const newC = {
    "id": uuid.v4(),
    "name": name,
    "phone":phone,
    "image":image,
  }
  const newContact = await fileService.addContact(newC);
  console.log(newC);
  console.log(newContact);
  console.log(contacts);
  setContacts([...contacts,newContact]);
  setIsAddModalOpen(false);
}

return (
  <View style={styles.container}>
    <Toolbar
      search="Search"
      searchString={searchString}
      setSearch={setSearch}
      onAdd={()=> setIsAddModalOpen(true)}    />
    <AddContactModal
      isOpen={isAddModalOpen}
      closeModal={()=> setIsAddModalOpen(false)}
      addContact={(name,phone,image) => addNewContact(name,phone,image)}
      />

      <AllContacts
      contacts={contacts}
      navigation={navigation}
      />
  </View>
)
};



export default Contacts;
