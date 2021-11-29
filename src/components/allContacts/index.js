import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { FlatList,Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import ContactThumbnail from '../ContactThumbnail';


const AllContacts = ({contacts}) => {
  return(
  <View style = {styles.listContainer}>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: {  id, name, image } }) => (
        <ContactThumbnail
          navigation={navigation}
          id={id}
          name={name}
          Image={image}

        />
    )}
    keyExtractor={item => item.name.toString()} />
  </View>

);
}

export default AllContacts;
