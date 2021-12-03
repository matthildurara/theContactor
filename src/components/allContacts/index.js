import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { FlatList,Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import ContactThumbnail from '../ContactThumbnail';


const AllContacts = ({ contacts,navigation }) => {

  return(
  <View style = {styles.listContainer}>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: {  id, name,phone, image } }) => (
        <ContactThumbnail
          id={id}
          name={name}
          image={image}
          phone={phone}


        />
    )}
    keyExtractor={(contact) => (contact).id} />
  </View>

);
}

export default AllContacts;
