import {StyleSheet} from 'react-native';
import {lightBlue,gray,green} from '../../styles/colors'

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor:green
  },
  toolbarActionText:{
    fontWeight:'bold',
    color: 'black',
    fontSize: 16
  },
  toolbarAction:{
    flex:1,
    alignItems: 'center'
  },
  searchBar:{
    borderWidth: 1
  }
});
