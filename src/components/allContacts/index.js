import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { FlatList,Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import ContactThumbnail from '../ContactThumbnail';


const AllContacts = ({ contacts,navigation }) => {
  //console.log(contacts);
  //console.log(contacts.image);
//   const [filterData,setFilteredData]= useState([]);
//
//   useEffect(()=>{
//     setFilteredData(contacts.filter(function (item) {
// 			return item.name.toLowerCase().includes(search.toLowerCase());
//
// })
//
// );
// },[contacts,searchString]);

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
