import React, { useState, useEffect } from 'react';
import { View, Text,ImageBackground,TouchableOpacity } from 'react-native';
import * as fileService from '../../services/fileService';
import styles from './styles';
//import ContactThumbnail from '../../components/ContactThumbnail';
import AllContactDetail from '../../components/AllContactDetail';

const ContactDetail = ({route}) => {
  const {id} = route.params.id;
  // const {name} = route.params.name;
  // const {phone} = route.params.phone;
  // console.log(id);
  //   console.log(name);
  //   console.log(phone);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [contact, setContact] = useState([]);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [image,setImage] = useState('');


  //console.log(id);

  useEffect(()=> {
    (async ()=> {
      const contacts = await fileService.getAllContacts();
      console.log(contacts);

      const findContact = contacts.filter(c=>c.id === id)
      //console.log(findContact);
      setContact(findContact);
      setName(findContact.name);
      setName(findContact.phone);
      setName(findContact.image);

      //console.log(findContact);

    })();

  },[]);
  //console.log(contact);
  // console.log(name);
  // console.log(id);
  // console.log(phone);
  return (
    <View>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.edit}>
        <Text> Edit</Text>
      </TouchableOpacity>
      </View>

        <View>
          <Text style={styles.edit}>
            {name}
          </Text>
          <Text style={styles.edit}>
            {phone}
          </Text>
        </View>
    </View>


)
};

export default ContactDetail;
