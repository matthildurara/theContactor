import React, {useState,useEffect} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native';
//import logo from '../../resources/logo.png';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
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
    //.sort((a,b)=> a.name.localCompare(b.name))
    // .sort(function(a,b) {
    //   if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    //   if(a.name.toLowerCase()> b.name.toLowerCase()) return 1;
    //   return 0;
    // })
    // .map((item,i) => <List key{i} data=item)
    const sortedContacts = contacts.sort((a,b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
    console.log(sortedContacts);
  })();
},[]);

// const orderContacts = () => {
//
// }
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
  const searchContacts = (contacts) => {
    let filteredContacts = contacts.filter(function(item) {
      return item.toLowerCase().includes(searchString.toLowerCase());
    });
    return filteredData;

  };

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
      contacts={(contacts) => searchContacts(contacts)}
      navigation={navigation}
      searchString={searchString}
      />
  </View>
)
};



export default Contacts;
