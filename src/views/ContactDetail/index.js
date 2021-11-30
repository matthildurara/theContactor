import React, { useState, useEffect } from 'react';
import { View, Text,ImageBackground } from 'react-native';
import * as fileService from '../../services/fileService';
import styles from './styles';
import ContactThumbnail from '../../components/ContactThumbnail';

const ContactDetail = ({route}) => {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [contcats, setContacts] = useState([]);

  useEffect(()=> {
    (async ()=> {
      const contcats = await fileService.getAllContacts();
      const contact = contacts.id;
      console.log(contact)

    })();

  },[]);
  return (
    <View style={styles.container}>
    <Toolbar
      onAdd={()=> setIsAddModalOpen(true)}    />
      <AllContactDetail
      contacts={contacts}
      />
    </View>


)
};

export default ContactDetail;
