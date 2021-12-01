import React, { useState, useEffect } from 'react';
import { View, Text,ImageBackground,TouchableOpacity,Image } from 'react-native';
import * as fileService from '../../services/fileService';
import styles from './styles';
import {Entypo} from '@expo/vector-icons';


const ContactDetail = ({route}) => {
  const {id} = route.params;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [contact, setContact] = useState('');
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');


  useEffect(()=> {
    (async ()=> {
      const contacts = await fileService.getAllContacts();

      const findContact = contacts.filter(c=>c.id === id)
      const objectCont = findContact.find(c=>c.id === id)
      //const name = findContact.name;
      //console.log(name);
      //console.log(findContact);
      setContact(objectCont);

    })();

  },[]);

  return (
    <View >
      <View styleName= "horizontal" style={styles.container} >
        <TouchableOpacity style={styles.toolbarAction}
        //onPress={()=> setIsEditModalOpen(true)}
          >
          <Text> Edit</Text>
        </TouchableOpacity>
          </View>
        <Image style={styles.image}
          resizeMode="cover"
          source={{ uri: contact.image }}
        />

        <View style={styles.contactBorder}>
          <Text style={styles.name}>
            {contact.name}
          </Text>
          </View>
          <View >

          <Text style={styles.number}>
            {contact.phone}
            <Entypo style={styles.icon} name="phone" />
          </Text>

        </View>


    </View>



)
};

export default ContactDetail;
