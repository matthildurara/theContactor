import React from 'react';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import {View,Text} from 'react-native';
import styles from './styles';

const Modal = ({
    isOpen,
    closeModal,
    addBoard,
    title,
    children

}) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop={true}
    onBackButtonPress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up','down']}
    style={styles.modal} >
      <View style={styles.body}>
        <Text>{title}</Text>
          {children}
      </View>
  </NativeModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired ,
  closeModal: PropTypes.func.isRequired,
  addBoard:PropTypes.func,
  title:PropTypes.string,
  children:PropTypes.node.isRequired
}

export default Modal;
