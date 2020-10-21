
import React from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput  } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const widthItem=windowWidth*0.75;
import Colors from '../constants/Colors';
const Communicate=Props=>{
    return ( 
     
     <View style={styles.container}>
       <TextInput
       />
     </View>
 
  );
};
 
 
const styles = StyleSheet.create({
    container:{
        width:widthItem, 
        height:widthItem*0.75,
        borderWidth:1,
        borderRadius:5,
        borderColor:Colors.colorCommunicate
    }
    
  });
  export default Communicate; 