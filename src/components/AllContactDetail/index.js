import React from 'react';
import { FlatList,Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
//import ContactDetailTumbnail from '../ContactDetailTumbnail';

const AllContactDetail = ({contacts}) => {


return (
  <View style = {styles.listContainer}>
        <Text style={styles.contactItemText}>{contacts.name}</Text>
  </View>

);
}


export default AllContactDetail;
