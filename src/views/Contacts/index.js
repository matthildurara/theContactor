import React, {useState,useEffect} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native';
//import logo from '../../resources/logo.png';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import AddContactModal from '../../components/AddContactModal';
import * as fileService from '../../services/fileService';
import AllContacts from '../../components/AllContacts';
import SearchBar from '../../components/Search';
import uuid from 'react-native-uuid';





const Contacts = (navigation) => {

const [isAddModalOpen,setIsAddModalOpen] = useState(false);
const [contacts,setContacts]= useState([]);
//const [filterData,setFileteredData]= useState([]);
const [searchString, setSearch]=useState('');
const [phone, setPhone]=useState('');
const [image, setImage]=useState('');
//console.log(contacts);

useEffect(()=> {

  (async () => {
    const contacts = await fileService.getAllContacts();
    const sortedContacts = contacts.sort((a,b) => a.name.localeCompare(b.name));
    if (searchString=== ''){
      setContacts(sortedContacts);
    }
    else{
    const searchLower = searchString.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchLower));
    setContacts(filteredContacts);
  }
    //setContacts(contacts);
    //console.log(sortedContacts);
  })();
},[contacts,searchString]);


const addNewContact = async (name,phone,image) => {
  const newC = {
    "id": uuid.v4(),
    "name": name,
    "phone":phone,
    "image":image,
  }
  const newContact = await fileService.addContact(newC);
  //console.log(newC);
  //console.log(newContact);
  //console.log(contacts);
  setContacts([...contacts,newContact]);
  setIsAddModalOpen(false);
}
  // const searchContacts = () => {
  //   //const copy = [...contacts];
  //   //setFileteredData(copy);
  //   const filteredContacts = contactsfilter(contact => contact.toLowerCase().icludes(searchString.toLowerCase()));
  //   setFilteredData(filteredContacts);
  //   //let filteredContacts = filterData.filter(function(item) {
  //     //return item.toLowerCase().includes(searchString.toLowerCase());
  //     if()
  //   });
  //   //setFileteredData(filteredData)
  //   return filteredContacts;
  //
  // };

return (
  <View style={styles.container}>
    <Toolbar
      onSearch={(searchString) =>setSearch(searchString)}
      onAdd={()=> setIsAddModalOpen(true)}
      onDelete={() => fileService.deleteAll()} />
    <AddContactModal
      isOpen={isAddModalOpen}
      closeModal={()=> setIsAddModalOpen(false)}
      addContact={(name,phone,image) => addNewContact(name,phone,image)}
      />

      <AllContacts
      contacts={contacts}
      searchString={searchString}
      navigation={navigation}
      />
  </View>
)
};



export default Contacts;
