import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity ,FlatList,ScrollView } from 'react-native';
import { AntDesign ,Entypo,FontAwesome,Ionicons} from '@expo/vector-icons'; 

import Card from '../components/Card'
import MainTitle from '../components/MainTitle'; 
import GridMenu from '../components/GridMenu'; 
import Colors from '../constants/Colors'
import Product from '../models/product';
import catagory from '../models/catagory';
import menu from '../models/catagory';

  const PRODUCTS = [
    new Product(
      '1',
      'חטיף',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
      29.99
    ),
    new Product(
        '2',
        'חלבון',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '3',
        'אוכל',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '4',
        'אוכל 1',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '5',
        'אוכל 2',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
      new Product(
        '6',
        'חלבון',
        'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        'כגכגדכגדךכףלגד  כגדךכשג,ף  גךכדףלךך גגללג100 5ג',
        29.99
      ),
]
 
  const catagory1es = [
    new catagory(
      '1',
      'משקלות',
        PRODUCTS,
      'https://www.linkpicture.com/q/item1.png',
      0
    ),
    new catagory(
        '1',
        'אוכל ו שתיה',
          PRODUCTS,
        'https://www.linkpicture.com/q/item2.png',
        0
      ),
      new catagory(
        '1',
        'חטיפים',
          PRODUCTS,
        'https://www.linkpicture.com/q/item2.png',
        0
      ),
    
    
    ]

      

       
  const menus=[
    new menu(1,'ספורט',catagory1es),
    new menu(2,'לחם',catagory1es),
    new menu(3,'שתיה',catagory1es),
    new menu(4,'מזון',catagory1es),
 
]    
 
const windowWidth = Dimensions.get('window').width;
const windowheight= Dimensions.get('window').height;



const MenuScreen=Props=>{
  const [isPress, setIsPress] = useState(false);

  const Icons=<View style={styles.Media}>
    <a href="https://www.facebook.com/Fitness-bar-sakhnin-109919470533905/" style={{textDecoration: 'none'}}><Entypo name="facebook" size={30} color="black"  style={{margin:10 }}/></a>     
    <a href="https://instagram.com/fitness.bar.sakhnin0?igshid=1dtwax1fs6jij" style={{textDecoration: 'none'}}> <AntDesign name="instagram" size={30} color="black" style={{margin:10 }} /></a>
    <a href="https://instagram.com/fitness.bar.sakhnin0?igshid=1dtwax1fs6jij" style={{textDecoration: 'none'}}><FontAwesome name="whatsapp" size={31} color="black" style={{margin:10 }} /></a>
   </View>

 

    return ( 
      <ScrollView>
  <View style={{flex:1}}>
   
    <View style={{height:windowheight*0.8 }}>
    <MainTitle
        goMenu={()=>{}}
        goHome={() => {
        Props.navigation.navigate({routeName: 'HomeScreen'});}}
        menu={1}
      />
       
        {menus.map((menu) =>  
        <View> 
          <GridMenu
          title={menu.title}
          data={catagory1es}
          navigation={Props.navigation}
          />

        </View>  )}
           
        </View>
    <View style={{width:windowWidth,height:35}}>
        {Icons}
    </View>
    
   

  </View>
  </ScrollView>
  );
};
  
 
const styles = StyleSheet.create({
  Media:{
    width:windowWidth,
    alignItems:'flex-end',
    justifyContent:'center',
    flexDirection:'row',

  },
  });
  export default MenuScreen; 
  
/*** {menus.map((menu) => <View>
          <GridMenu
           title={menu.title}
           data={catagory1es}
          />
        </View>)} */
  