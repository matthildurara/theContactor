<<<<<<< HEAD
import React from 'react';
import { Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';

const ContactThumbnail = ({name,image, phone}) => {
  return (
    <TouchableOpacity>
      <View style={styles.contact}>
          <Image style={styles.contactText} source={{uri:`data:image/jpeg;base64,${image}`}}/>

          <Text style={styles.contactText}>{name}</Text>
          <Text style={styles.contactText}>{phone}</Text>
      </View>
    </TouchableOpacity>
);
}


export default ContactThumbnail;
=======
// import React from 'react';
// import { Text,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
//
// const ContactThumbnail = ({name,image}) => {
//   return (
//     <TouchableOpacity>
//       <View style={styles.contact}>
//         <Image style={styles.contactText} source={{uri:`data:image/jpeg;base64,${image}`}}/>
//
//           <Text style={styles.contactText}>{name}</Text>
//       </View>
//     </TouchableOpacity>
// );
// }
//
//
// export default ContactThumbnail;
>>>>>>> 9f3367a19c78015fdacb79e8aa1590d271e876ff
