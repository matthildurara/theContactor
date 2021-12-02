
import { StyleSheet,Dimensions } from 'react-native';

const {width: winWidth} = Dimensions.get('window');
export default StyleSheet.create({
    modal:{
    },
    icon: {
        fontSize: 60,
        marginTop: 10,
        marginBottom: 10
    },
    container: {

      backgroundColor: '#b0c4de',
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
      width: winWidth -100,
    },

    addContact: {
      padding:10
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
    textAccept:{
      fontSize:20
    }
});
