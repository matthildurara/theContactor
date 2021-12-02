import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import styles from './styles';

const Toolbar = ({
  onAdd,
  // search,
  // setSearch,
   //searchString,
  onDelete,
  onSearch,
}) => {

  const [searchString,setSearch] = useState('')
return(
    <View styleName= "horizontal" style={styles.toolbar}>
      <TouchableOpacity style={styles.toolbarAction}>
        <TextInput
          value={searchString}
          setValue={setSearch}
          onChangeText={setSearch}
          placeholder="Search"
        />
      </TouchableOpacity>
      <TouchableOpacity
          onPress={()=>onSearch(searchString)}>
          <Text>Search</Text>
      </TouchableOpacity>
          <TouchableOpacity
          style={styles.toolbarAction}
          onPress={() => onDelete()}>
            <Text> Delete </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.toolbarAction}
          onPress={() => onAdd()}>
            <Text> Add new Contact </Text>
          </TouchableOpacity>

          </View>

);
}

export default Toolbar;
