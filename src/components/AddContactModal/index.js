import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import {Entypo} from '@expo/vector-icons';
import {View,Text,TextInput,Button,TouchableOpacity,Image} from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';
import {addContact} from '../../services/fileService';
import logo from '../../resources/logo.png';

const AddContactModal = ({
    isOpen,
    closeModal,
    addContact,
}) => {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [image,setImage] = useState('https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg');
  //async addNewContact = async

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
          const image = await takePhoto();
          setImage(image);}}
         >
        <Entypo style={styles.icon} name="camera"/>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          const image = await selectFromCameraRoll();
          setImage(image);}}
        >
        <Entypo style={styles.icon} name="image"/>
      </TouchableOpacity>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            addContact(name,phone,image);
            setName('');
            setPhone('');
            setImage('https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg');
            closeModal()}}
            disabled={name === ''|| phone.length !== 7 }
            >
          <Text style={[styles.textAccept,!(name === ''|| phone.length !== 7)
          ? {}: {color:'rgba(155,155,155,0.5)'}]}>Ok</Text>
        </TouchableOpacity>
      </View>
  </Modal>
);
};

export default AddContactModal;
