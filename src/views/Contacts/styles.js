import {StyleSheet} from 'react-native';
import {lightBlue} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor: lightBlue,
    justifyContent: 'space-around'
  },
  paragraph:{
    textAlign: 'center',
    color: 'white'
  }
});
