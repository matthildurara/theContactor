import {StyleSheet} from 'react-native';
import {lightBlue} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor:lightBlue
  },
  paragraph:{
    textAlign: 'center',
    color: 'white'
  },
  edit:{
    color:'black',
  },
  toolbarAction:{
  fontWeight:'bold',
  color: 'black',
  fontSize: 16
},
image:{
  flex:1,
padding:10,
paddingLeft:10,
paddingRight:1,
marginBottom:15,
marginRight:1,
width:80,
height:90,
margin:10,
}
});
