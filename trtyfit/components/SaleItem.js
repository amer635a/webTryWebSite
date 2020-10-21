import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/Colors';


const HeightGrid=170
const WidthGrid=100
const NameHeb='שם'
const PriceHeb='מחיר'
const ShowHeb='הצגה'

const SaleItem=Props=>{
    return ( 
        <View style={{marginHorizontal:10}}>
     <Card>
    <View style={styles.container}>
        <View style={styles.containerimage}>
     <Image
        style={styles.imageproduct}
        source={{ uri: Props.image}}
      /></View>
     <View style={styles.containertitle}><Text>{NameHeb} : </Text><Text>{Props.title}</Text></View>
     <View style={styles.containerprice}>
         <Text style={styles.textpricew}>{PriceHeb} : </Text>
         <Text style={styles.textprice}>{Props.Newprice}</Text>
         <Text style={styles.textoldprice}>  <del>{Props.Oldprice}</del></Text>
     </View>

       <TouchableOpacity onPress={Props.onSelect}  style={styles.containershow}><Text>{ShowHeb}</Text></TouchableOpacity>
     
    </View>
    </Card>
    </View>
  );
};
 
 
const styles = StyleSheet.create({
    container:{
        height:HeightGrid,
        width:WidthGrid,
        marginLeft:8
    },
    containerimage:{
        borderRadius: 5, 
        height:'60%',
        width:'100%',
    },
    imageproduct:{
        height:'100%',
        width:'100%',
        
    },
    containertitle:{
        flexDirection:'row-reverse' ,
        justifyContent:'center',
        alignItems:'center',
        width:WidthGrid+25,
        height:'12%',
    },
    containerprice:{
         flexDirection:'row-reverse' ,
         height:'12%',
         justifyContent:'center',
         alignItems:'center'  
    },
    textpricew:{
        fontFamily: 'open-sans-bold',
        fontSize: 15
    },
    textprice:{
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    textoldprice:{
        color:'red',
        fontSize:13,
        marginRight:4
    },
    containershow:{
        height:'15%',
        width:'100%',
        backgroundColor:Colors.goldColor,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'black',
        marginTop:2,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    }    

  });
  export default SaleItem; 