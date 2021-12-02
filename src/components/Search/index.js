import React from 'react';
import {SearchBar as NativeSearchBar} from 'react-native-elements';

const SearchBar = ({value, onSearch}) => (
  <NativeSearchBar
    round
    lightTheme
    placeholder="Search..."
    onChangeText={onSearch}
    value={value}
    showLoading={false}
    containerStyle={{ borderWidth: 0.5, borderRadius: 1 }}
  />
);

export default SearchBar;
