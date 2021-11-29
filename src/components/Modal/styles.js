import {StyleSheet,Dimensions} from 'react-native';

const {width: winWidth} = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexGrow:.5,
    borderRadius:10,
    width: winWidth -100,
    backgroundColor: 'white',
    position:'absolute',
    padding: 10
  }
})
