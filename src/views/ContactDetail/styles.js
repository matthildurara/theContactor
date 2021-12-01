import {StyleSheet} from 'react-native';
import {lightBlue} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: lightBlue,
  },
  paragraph:{
    textAlign: 'center',
    color: 'white',
    backgroundColor: lightBlue,
  },
  contactBorder:{
    borderStyle: 'solid',
    borderWidth: 2,
    paddingHorizontal: 1,
    backgroundColor: lightBlue,


  },
  name:{
    color:'black',
    fontSize: 30,
    fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center',
    backgroundColor: lightBlue,


  },
  number:{
    marginTop: 40,
    borderWidth: 1,
    color:'black',
    fontSize: 30,
    fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center',
    backgroundColor: lightBlue,
  },

  toolbarAction:{
  fontWeight:'bold',
  color: 'black',
  fontSize: 16,
  backgroundColor: lightBlue,
},
  image:{
    flex:1,
  padding:80,
  paddingLeft:80,
  paddingRight:80,
  marginBottom:25,
  marginRight:25,
  width:140,
  height:150,
  margin:10,
  alignSelf: 'center',
  backgroundColor: lightBlue,
},
icon: {
  fontSize: 20,
  marginTop: 20,
  marginBottom: 20,
},
});
