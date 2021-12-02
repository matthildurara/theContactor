import {StyleSheet} from 'react-native';
import {lightBlue} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#b0c4de',
  },
    toolbarAction:{
    width:100,
    textAlign:'center',
    color: 'black',
    backgroundColor: '#b0c4de'
  },
  toolbarText:{
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:16
  },

  contactBorderName:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingHorizontal: 1,
    backgroundColor:'gainsboro',
    paddingBottom:10


  },

    contactBorderNum:{
      paddingTop:20,
      backgroundColor:'gainsboro',
      height:700
    },

  name:{
    color:'black',
    fontSize: 30,
    fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center',
  },

  number:{
    paddingBottom:10,
    color:'black',
    fontSize: 30,
    fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center',
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
  borderRadius:100
},
imageBackground:{
  backgroundColor:'gainsboro'
},
icon: {
  fontSize: 20,
  marginTop: 20,
  marginBottom: 20,
},
});
