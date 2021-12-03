import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import {AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import styles from './styles';

const Toolbar = ({
  onAdd,
  // search,
  // setSearch,
   //searchString,
  onDelete,
  onSearch,
}) => {

  const [search,setSearch] = useState('')
return(
    <View styleName= "horizontal" style={styles.toolbar}>
      <TouchableOpacity style={styles.toolbarAction}>
        <TextInput
          value={search}
          setValue={setSearch}
          onChangeText={setSearch}
          placeholder="Search"
        />
      </TouchableOpacity>
      <TouchableOpacity
          onPress={()=>onSearch(search)}>
          <Text>
          <MaterialIcons name="search" size={24} color="black" />
          </Text>
      </TouchableOpacity>
          <TouchableOpacity
          style={styles.toolbarAction}
          onPress={() => onDelete()}>
            <Text> Delete </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.toolbarAction}
          onPress={() => onAdd()}>
            <Text>
            <Ionicons name="person-add-outline" size={24} color="black" />
            </Text>
          </TouchableOpacity>

          </View>

);
}

export default Toolbar;
