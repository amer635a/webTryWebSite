import React from 'react';
import { Children } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import Colors from '../constants/Colors';
const Card=Props=>{
    return ( 
     
<LinearGradient
              colors={[Colors.color1grad, Colors.color2grad]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 5 }}
            >
              <View style={styles.registerButtonStyle}>
              {Props.children}
              </View>
            </LinearGradient>
  );
};
 
 
const styles = StyleSheet.create({
    registerButtonStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 7,
        paddingTop: 7,
        margin: 1,
        backgroundColor: "white",
        borderRadius: 5
    },
  });
  export default Card; 