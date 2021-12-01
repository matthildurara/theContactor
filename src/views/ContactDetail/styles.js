import {StyleSheet} from 'react-native';
import {lightBlue} from '../../styles/colors';

export default StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 70,
  //   backgroundColor:lightBlue
  // },
  container: {
    flex:1,
    padding:19,
    backgroundColor: lightBlue,
    justifyContent: 'space-around'
  },
  paragraph:{
    textAlign: 'center',
    color: 'white',
  },
  contactBorder:{
    borderStyle: 'solid',
    borderWidth: 2,
    paddingHorizontal: 1,

  },
  name:{
    color:'black',
    fontSize: 30,
    fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center'
  },
  number:{
    marginTop: 40,
    borderWidth: 1,
    color:'black',
    fontSize: 30,
    fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center'
  },

  toolbarAction:{
  fontWeight:'bold',
  color: 'black',
  fontSize: 16
},
  image:{
    flex:1,
  padding:80,
  paddingLeft:80,
  paddingRight:80,
  marginBottom:25,
  marginRight:25,
  width:130,
  height:150,
  margin:10,
  alignSelf: 'center'
},
});
