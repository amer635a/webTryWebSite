import React from 'react';
import { StyleSheet,Image,Text,SafeAreaView,  Dimensions ,
   View, ScrollView ,FlatList,TouchableOpacity,Platform,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 

import Communicate from '../components/Communicate'
import Card from '../components/Card'
import MainTitle from '../components/MainTitle'; 
import Colors from '../constants/Colors';
import PoularItem from '../components/PoularItem';
import SaleItem from '../components/SaleItem';
 
  const DATA= [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-21121221212',
      title: 'מקלות פקינמון',
      imageUrl:'https://www.linkpicture.com/q/item3.png',
      price:100,

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-211212222212',
      title: 'מקלות פקינמון',
      imageUrl:'https://www.linkpicture.com/q/item4.png',
      price:100,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145511112qww72',
      title: 'מקלות פקינמון',
      imageUrl:'https://www.linkpicture.com/q/item2_2.png',
      price:100,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145511112qwz 72',
       title: 'מקלות פקינמון',
       imageUrl:'https://www.linkpicture.com/q/item1.png',
      price:100,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145511112 zsas72',
      title: 'Third Item',
      imageUrl:'https://www.linkpicture.com/q/item4.png',
      price:100,
    },
  ];

  const DATAPRODUCT= [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-21121221212',
      title: 'מקלות פקינמון',
      imageUrl:'https://www.linkpicture.com/q/1_343.png',
      Newprice:90,
      Oldprice:100

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-211212222212',
      title: 'מקלות פקינמון',
      imageUrl:'https://www.linkpicture.com/q/3_189.png',
      Newprice:90,
      Oldprice:100
    },
    {
      id: '58694a0f-3da1-471f-bd96-145511112 vvvv72',
      title: 'מקלות פקינמון',
      imageUrl:'https://www.linkpicture.com/q/4_149.png',
      Newprice:90,
      Oldprice:100
    },
    {
      id: '58694a0f-3da1-471f-bd96-145511112 awaw72',
       title: 'מקלות פקינמון',
       imageUrl:'https://www.linkpicture.com/q/6_91.png',
      Newprice:90,
      Oldprice:100
    },
    {
      id: '58694a0f-3da1-471f-bd96-145511112 72',
      title: 'Third Item',
      imageUrl:'https://www.linkpicture.com/q/7_77.png',
      Newprice:90,
      Oldprice:100
    },
  ];

  const windowWidth = Dimensions.get('window').width;
  const imageContainerWidth=windowWidth/2+50;
  const iconContainerWidth=windowWidth-imageContainerWidth;

  const widthImageMain=windowWidth*0.8;
  const heightImageMain=300;
  const TITLE_HEIGHT=40;
  const high = Dimensions.get('window').height;

const HomeScreen=Props=>{
 
    const PopularHEB='נמכרים ביותר';
    const arrow ='<--->'
    const CatgoryHEB= 'קטגוריות';
    const SaleHEB= 'מבצעים';
    const MekomHEB= 'מיקום';
    const CommunicateHEB='ליצרה קשר';
    const Desc='ברוך הבאה לפיטנס בר סכנין';
    
    const Icons=<View style={styles.Media}>
    <a href="https://www.facebook.com/Fitness-bar-sakhnin-109919470533905/" style={{textDecoration: 'none'}}><Entypo name="facebook" size={30} color="black"  style={{margin:10 }}/></a>     
    <a href="https://instagram.com/fitness.bar.sakhnin0?igshid=1dtwax1fs6jij" style={{textDecoration: 'none'}}> <AntDesign name="instagram" size={30} color="black" style={{margin:10 }} /></a>
    <a href="https://instagram.com/fitness.bar.sakhnin0?igshid=1dtwax1fs6jij" style={{textDecoration: 'none'}}><FontAwesome name="whatsapp" size={31} color="black" style={{margin:10 }} /></a>
   </View>
     
     

    return ( 
    <View style={{flex:1}}>
       <MainTitle
        goMenu={() => {
        Props.navigation.navigate({routeName: 'MenuScreen'});}}
        goHome={() => {
        Props.navigation.navigate({routeName: 'HomeScreen'});}}
        home={1}
       />

       <ScrollView style={{flex:1}}>
       <ImageBackground source={require('../assets/back.png')} style={styles.ImageBackground}>
                                                
          
         <View style={{width:windowWidth,height:200}}> 
     <Image source={require('../assets/7.png')} 
     style={{width:'100%',height:'100%'}}/>
            </View>
            <View style={{marginTop:30}}><Text>{Desc}</Text> </View> 
         <View>
            <Text style={styles.popular}>{PopularHEB}</Text>
         </View>      
                             
         <FlatList
      data={DATA}
      horizontal
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PoularItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => { Props.navigation.navigate({routeName: 'ProductDetailScreen', params: {product: itemData.item}}); }}
        /> 
      )}
    />
      <View style={{marginTop:5}}>
          <Text style={styles.popular}>{SaleHEB}</Text>
      </View>  
  <View style={{marginTop:10}}>
            <FlatList
             data={DATAPRODUCT}
             horizontal
             keyExtractor={item => item.id}
             renderItem={itemData => (
    
              <SaleItem
               image={itemData.item.imageUrl}
               title={itemData.item.title}
               Newprice={itemData.item.Newprice}
               Oldprice={itemData.item.Oldprice}
                onSelect={() => {}}
                /> 
                )}/>
    
  </View> 
  <View style={{marginTop:5}}>
          <Text style={styles.popular}>{MekomHEB}</Text>
   </View> 

   <View style={{alignItems:'center'}}>
           <Image source={require('../assets/loaction.png')} 
             style={styles.Imageloaction}/>
   </View>
     

   <Text style={styles.popular}> {CommunicateHEB} </Text>  
          
         <View style={{justifyContent:'center',alignItems:'center'}}><Communicate></Communicate></View>
         {Icons}
         <marquee>Fitness Bar 2020</marquee>
       </ImageBackground>
 
   </ScrollView>  
  </View>
  );
};
 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
         
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      popular:{
        fontFamily: 'open-sans-bold',
        fontSize: 23,
        marginVertical: 2,
        
      },
      tinyLogo: {
        width: windowWidth/3-20,
        height: 150,
        borderRadius:10
      },
      Imageloaction:{
        width:windowWidth-50,
        height:300,
        padding:20, 
        
      },
      MainImage:{
        width:widthImageMain-30,
        height :heightImageMain
      },
      Media:{
        width:windowWidth,
        height:150,
        alignItems:'flex-end',
        justifyContent:'center',
        flexDirection:'row',
 
      },
      containerTitle:{
        height:TITLE_HEIGHT,
        borderBottomWidth:1,
        backgroundColor:'white',
        flexDirection:'row',
        width:windowWidth
      }, 
      IconConainer:{
       width:iconContainerWidth,
 
      },
      imagecontainer:{
        width:imageContainerWidth ,
         
        backgroundColor:'red'
      },
      image:{
         height:TITLE_HEIGHT -3,
         width:120,
         resizeMode: 'center',
         justifyContent: "center"
      },
      ImageBackground:{
         flex: 1,
         resizeMode: "cover",
         justifyContent: "center" 
      }
    
  });
  export default HomeScreen; 
  