import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import styles from './styles';

const contactsList = (
  <View style = {styles.listContainer}>
    <FlatList
    numColumns={1}
    renderItem={({ item: {  name, thumbnailPhoto, description } }) => (
        <BoardThumbnail
          name={'Bertha'}
          thumbnailPhoto={':)'}
          description={'Skemmtilegt'}

        />
    )} />
  </View>

);

export default contactsList;
