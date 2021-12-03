import React from 'react';
import {SearchBar as NativeSearchBar} from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';


const SearchBar = ({value, onSearch}) => (
<View>
  <NativeSearchBar
    round
    lightTheme
    //placeholder="Search..."
    onChangeText={onSearch}
    value={value}
    showLoading={false}
    containerStyle={{ borderWidth: 0.5, borderRadius: 1 }}
  />
  <MaterialIcons name="search" size={24} color="black" />
  </View>


);

export default SearchBar;
