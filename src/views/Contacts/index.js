import React, {useState,useEffect} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native';
//import logo from '../../resources/logo.png';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import AddContactModal from '../../components/AddContactModal';
import * as fileService from '../../services/fileService';
import AllContacts from '../../components/AllContacts';




const Main = () => {

const [isAddModalOpen,setIsAddModalOpen] = useState(false);
const [contacts,setContacts]=useState([]);
const [searchString,setSearch]= useState('');
const [name, setName]=useState('');
const [phone, setPhone]=useState('');
const [image, setImage]=useState([])

useEffect(()=> {
  (async () => {
    const contacts = await fileService.getAllContacts();
    setContacts(contact);

  })();
},[]);

const addNewContact = async contact => {
  const newContact = await fileService.addContact(contact);
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
      />
  </View>
)
};



export default Main;
