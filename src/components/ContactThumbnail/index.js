import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import { Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';


const ContactThumbnail = ({id,name,phone,image}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('ContactDetail',{id:id})}>
      <View style={styles.ContactItem} >
        <Image style={styles.contactImage}
          source={{ uri: image }}
          numColumns={2}
        />
        <Text style={styles.contactName}>{name}</Text>
        <AntDesign name="arrowright"size={24} color="black" />
      </View>
    </TouchableOpacity>
);}

export default ContactThumbnail;
