import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import styles from './styles';

const Toolbar = ({
  onAdd,
  search,
  setSearch,
  searchString
}) => (

    <View styleName= "horizontal" style={styles.toolbar}>
      <TouchableOpacity style={styles.toolbarAction}>
        <TextInput
          value={searchString}
          setValue={setSearch}
          placeholder="Search"
          search={search}
          />
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.toolbarAction}
          onPress={() => onAdd()}>
            <Text> Add new Contact </Text>
          </TouchableOpacity>

          </View>

);

export default Toolbar;
