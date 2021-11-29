import React {useState} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native';
//import logo from '../../resources/logo.png';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import AddContactModal from '../../components/AddContactModal';




const Main = () => {

const [isAddModalOpen,setIsAddModalOpen] = useState(false);

return (
  <View style={styles.container}>
    <Toolbar
    onAdd={()=> setIsAddModalOpen(true)}
    <Text style={styles.paragraph}> The Contactor </Text>

  </View>
)
};



export default Main;
