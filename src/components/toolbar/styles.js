import {StyleSheet} from 'react-native';
import {lightBlue,gray,green} from '../../styles/colors'

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor:'#b0c4de',
    top:0,
    paddingLeft:10,
    paddingRight:10,
    shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    marginBottom: 10
  },
  toolbarActionText:{
    fontWeight:'bold',
    color: 'white',
    fontSize: 16
  },
  toolbarAction:{
    flex:1,
    alignItems: 'center'
  },
  searchBar:{
    borderWidth: 1
  }
});
