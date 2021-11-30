import React from 'react';
import { FlatList,Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';


const AllContactDetail = ({contact}) => {

return (
  <View style = {styles.listContainer}>
        <Text style={styles.contactItemText}>{contact.name}</Text>
  </View>

);
}


export default AllContactDetail;
