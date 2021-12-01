
import { StyleSheet,Dimensions } from 'react-native';

const {width: winWidth} = Dimensions.get('window');
export default StyleSheet.create({
    icon: {
        fontSize: 60,
        marginTop: 20,
        marginBottom: 20
    },
    container: {
      backgroundColor: 'rgba(155,155,155,0.5)',
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
      width: winWidth -100,
    },
    addContact: {
      borderStyle: 'solid',
      borderWidth: 1,
      paddingHorizontal: 1,
    },
    addContactText:{
      fontSize:20,
    },
    textInput:{
      width: winWidth -90,
      paddingRight: 16,
      paddingLeft:16,
      borderWidth: 1,
    },
    setImage:{
      height:10,
      width:10
    },
});
