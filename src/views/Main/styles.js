import {StyleSheet} from  'react-native';
import {darkBlue,gray} from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    backgroundColor: darkBlue,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button:{
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: gray
  },
  buttonText: {
    color: 'white'
  },
  logo:{
    width: 200,
    height: 200
  },
  paragraph: {
    textAlign: 'center',
    color: 'white'
  }
});
