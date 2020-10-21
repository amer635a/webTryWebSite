import React, { Component } from 'react';
import LinearGradient from 'react-native-web-linear-gradient';
import { Text, StyleSheet, ImageBackground,View ,Dimensions } from 'react-native';

const windowheight= Dimensions.get('window').height;
const TryScreen=Props=>{
    return(
        <View style={styles.container}>
      <ImageBackground source={require('../assets/1.png')} style={styles.imgBackground}>
        <LinearGradient
          colors={["#09203f", "#537895"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <Text style={styles.text} >Linear Gradient Example</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  
      );
};
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      imgBackground: {
        flex: 1,
        width: "100%",
        alignItems: "center",
      },
      linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
      }
  });
  export default TryScreen; 
  //source={require('../assets/back.png')}  