import {StyleSheet} from  'react-native';
import {darkBlue,gray} from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    backgroundColor:'#b0c4de',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button:{
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    backgroundColor: gray,
    borderColor:'black',
  },
  buttonText: {
    color: 'black',

  },
  logo:{
    width: 200,
    height: 200
  },
  paragraph: {
    textAlign: 'center',
    color: 'black'
  }
});
