import {StyleSheet} from 'react-native';
import {lightBlue} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex:1,
    padding:19,
    backgroundColor: lightBlue,
    justifyContent: 'space-around'
  },
  paragraph:{
    textAlign: 'center',
    color: 'white'
  },
  edit:{
    flex:1
  }
});
