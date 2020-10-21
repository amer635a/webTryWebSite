import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,
  ScrollView,Dimensions,Image,Linking } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 


import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

const widthImageMain=windowWidth*0.8;
const Title_Image_Height=TITLE_HEIGHT-5;
const TITLE_HEIGHT=40;

const PriceHeb='מחיר'
const ToOrder='להזמנה'

const ProductDetailScreen=Props=>{
  const product = Props.navigation.getParam('product');
  const Quantity=7;
  const mobileNumber='0543877432'
  const whatsAppMsg='רוצה להזמין        '+product.title  +'כמות      '+Quantity

  const initiateWhatsApp = () => {
     
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=+972' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
  

    return ( 
     <View>
      <View style={styles.container}>
         
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>{
        Props.navigation.goBack();
      }}>
 
      <View style={{marginLeft:30,justifyContent:'center',alignItems:'center'}}>
       <Ionicons name="ios-arrow-back" size={24} color={Colors.goldColor}/>  </View>
      </TouchableOpacity  >
     <View style={styles.imageContainer}> 
      <Image source={require('../assets/logo.png')} 
      style={styles.image}/>
      </View>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => {
        Props.navigation.navigate({routeName: 'HomeScreen'});}}>
      <View style={{marginRight:30,justifyContent:'center',alignItems:'center'}}>
      <AntDesign name="home" size={24} color={Colors.goldColor} /> 
        
        </View>
      </TouchableOpacity>
     </View>

     <View>
       <View style={{width:windowWidth,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30,fontFamily: 'open-sans-bold',}}>{product.title}</Text>
       </View>
     <View style={{justifyContent:'center',alignItems:'center'}}>
     <View style={{width:windowWidth*0.75 ,height:200,justifyContent:'center',alignItems:'center'}}>
     <Image
        style={{width:'100%',height:'100%',resizeMode:'stretch',}}
        source={{
          uri: product.imageUrl    
        }}
      />
 
     </View>
     </View>

      
     <View style={{justifyContent:'flex-end',}}>
       <View style={{marginTop:10,marginBottom:5,borderTopWidth:2}}></View>
       <View style={{marginRight:20}}>
      <Text style={{}}>{PriceHeb} : {product.price}</Text>
      </View>
     </View>

     <TouchableOpacity style={{width:windowWidth,justifyContent:'center',alignItems:'center'}} onPress={initiateWhatsApp}>
        <Text style={{fontSize:28,fontFamily: 'open-sans-bold'}}>{ToOrder}      <FontAwesome name="whatsapp" size={24} color="green" /> </Text>
     </TouchableOpacity>
     </View>
     </View>
 
  );
};
 
 
const styles = StyleSheet.create({
  container:{
    width:windowWidth,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'white',
    borderBottomWidth:1
  },
  image:{
    height:TITLE_HEIGHT,
    width:100
  }
  });
  export default ProductDetailScreen; 