import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import { Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';


const ContactThumbnail = ({navigation,id,name,image}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity>
    onPress={() => navigate('ContactDetail',{id})}
      <View style={styles.contact}>
        <Image style={styles.contactImage} source={{uri:`data:image/jpeg;base64,${image}`}}/>

          <Text style={styles.contactName}>{name}</Text>
      </View>
    </TouchableOpacity>
);
}


export default ContactThumbnail;
