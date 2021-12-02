
import { StyleSheet,Dimensions } from 'react-native';

const {width: winWidth} = Dimensions.get('window');
export default StyleSheet.create({
    icon: {
        fontSize: 60,
        marginTop: 20,
        marginBottom: 20
    },
    container: {
      backgroundColor:'#b0c4de',
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
      width: winWidth -100,
    },
    editContact: {
      borderStyle: 'solid',
      borderWidth: 1,
      paddingHorizontal: 1,
    },
    editContactText:{
      fontSize:20,
    },
    textInput:{
      width: winWidth -100,
      paddingRight: 16,
      paddingLeft:16,
      borderWidth: 1,
    },
    textAccept:{
      fontSize:20
    }
});
