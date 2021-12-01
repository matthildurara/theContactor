import React from 'react';
import { FlatList,Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import styles from './styles';
import ContactDetailTumbnail from '../ContactDetailTumbnail';

const AllContactsDetail = ({contacts}) => {
  return(
  <View style = {styles.listContainer}>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({ item: {  id, name, image } }) => (
        <ContactThumbnail
          id={id}
          name={name}
          Image={image}

        />
    )}
    keyExtractor={item => item.id.toString()} />
  </View>

);
}

export default AllContactsDetail;
