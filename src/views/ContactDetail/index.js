import React, { useState, useEffect } from 'react';
import { View, Text,ImageBackground,TouchableOpacity } from 'react-native';
import * as fileService from '../../services/fileService';
import styles from './styles';
//import ContactThumbnail from '../../components/ContactThumbnail';
import AllContactDetail from '../../components/AllContactDetail';

const ContactDetail = ({route}) => {
  const {id} = route.params;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [contact, setContact] = useState([]);
  // const [name,setName] = useState('');
  // const [phone,setPhone] = useState('');
  // const [image,setImage] = useState('');


  console.log(id);

  useEffect(()=> {
    (async ()=> {
      const contacts = await fileService.getAllContacts();

      const findContact = contacts.filter(c=>c.id === id)
      setContact(findContact);
      // setName(findContact.name);
      // setName(findContact.phone);
      // setName(findContact.image);

      console.log(findContact);

    })();

  },[]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.edit}>
        <Text> Edit</Text>
      </TouchableOpacity>
        <View>
          <Text style={styles.edit}>
            {contact.name}
          </Text>
          <Text style={styles.edit}>
            {contact.phone}
          </Text>
        </View>
    </View>


)
};

export default ContactDetail;
