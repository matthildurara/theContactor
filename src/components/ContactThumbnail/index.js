import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import { Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';


const ContactThumbnail = ({id,name,phone,image}) => {
  const {navigate} = useNavigation();
  // console.log(id);
   //console.log(name);

   // if(true){
   //   image = "https://images-ext-2.discordapp.net/external/R2qd_B5kRL5W9_OcXuV0jWX8Zu0TG6DTvO-rvvtBtHU/https/thumbs.dreamstime.com/z/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg?width=986&height=1041"
   // }
   //console.log(image);

  return (
    <TouchableOpacity
    onPress={() => navigate('ContactDetail',{id:id})}>
      <View style={styles.contact}>
        <Image style={styles.contactImage}
        source={{ uri: image }}
        />

          <Text style={styles.contactName}>{name}</Text>
      </View>
    </TouchableOpacity>
);
}


export default ContactThumbnail;
