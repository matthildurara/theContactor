import {StyleSheet,Dimensions} from 'react-native';


export default StyleSheet.create({
  contact: {
    flex:1,
  },
  contactImage:{
    flex:1,
    padding:5,
    paddingLeft:5,
    paddingRight:1,
    marginBottom:2,
    marginRight:1,
    width:100,
    height:100,
    margin:3,
    borderRadius:50,

  },
  contactName:{
  flex:1,
  flexGrow:1,
  width:310,
  textAlign: 'center',
  marginLeft:10,
  marginRight:5,
  marginTop:30,
  marginBottom:40,
  fontWeight:'bold',
  position:'relative'
},
ContactItem: {
  // flex:1,
  flexDirection:'column',
  width:320,
  borderColor:'black',
  borderRadius:20,
  marginTop: 10,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 5,
  paddingRight: 5,
  backgroundColor:'gainsboro',
  alignItems:'center',
  shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 2,},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

});
