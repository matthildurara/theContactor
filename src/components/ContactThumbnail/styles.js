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
    width:20,
    height:80,
    margin:3,

  },
  contactName:{
  flex:1,
  flexGrow:1,
  width:40,
  //textAlign: 'center',
  marginLeft:10,
  marginRight:5,
  marginTop:30,
  marginBottom:40,

  fontWeight:'bold',
  //position:'relative'

},
ContactItem: {
  flex:1,
  flexDirection:'row',

  width:320,
  borderColor:'black',
  borderWidth:2,
  marginTop: 5,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 5,
  paddingRight: 5,
  backgroundColor:'rgb(149, 235, 235)',
},

});
