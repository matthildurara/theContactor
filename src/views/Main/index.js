import React from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';


const Main = ({navigation: {navigate}}) => (


  <View style={styles.container}>
    <Image style={styles.logo} source={logo}/>
    <Text style={styles.paragraph}> The Contactor </Text>
    <TouchableHighlight
      onPress={() => navigate('Contacts')}
      style={styles.button}>
      <Text style={styles.buttonText}> Contacts </Text>
    </TouchableHighlight>
  </View>
);



export default Main;
