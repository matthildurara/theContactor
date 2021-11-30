import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import {Entypo} from '@expo/vector-icons';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';
import {addContact} from '../../services/fileService';

const AddContactModal = ({
    isOpen,
    closeModal,
    addContact,
}) => {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [image,setImage] = useState([]);


  return (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}>
      <View style={styles.addContact}>
          <Text style={styles.addContactText}> Add Contact </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.contactText}> Contact Name: </Text>
      </View>
      <TouchableOpacity style={styles.textInput}>
        <TextInput
            placeholder="Contact Name"
            value={name}
            setValue={setName}
            onChangeText={setName}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.contactText}> Phone Number: </Text>
      </View>
      <TouchableOpacity style={styles.textInput}>
        <TextInput
            placeholder="Phone Number"
            value={phone}
            setValue={setPhone}
            onChangeText={setPhone}
            keyboardType="number-pad"
            maxLength={7}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.contactText}> Photo </Text>
      </View>
      <TouchableOpacity
        onPress={async () => {
          const i = await takePhoto();
          setImage(i);}}
         >
        <Entypo style={styles.icon} name="camera"/>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          const i = await selectFromCameraRoll();
          setImage(i);}}
        >
        <Entypo style={styles.icon} name="image"/>
      </TouchableOpacity>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            addContact(name,phone,image);
            console.log(name);
            console.log(phone);
            console.log(image);
            setName('');
            setPhone('');
            setImage('')
            closeModal()}}>
          <Text style={[styles.textAccept,!(name === ''|| phone.length !== 7 || image === '')
          ? {}: {color:'rgba(155,155,155,0.5)'}]}>Ok</Text>
        </TouchableOpacity>
      </View>
  </Modal>
);
};

export default AddContactModal;
