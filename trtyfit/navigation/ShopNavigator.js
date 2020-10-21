import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import TryScreen from '../screens/TryScreen';
const ProductsNavigator = createStackNavigator(
    {
        
        HomeScreen: HomeScreen,
        MenuScreen:MenuScreen,
        ProductDetailScreen:ProductDetailScreen,
        ProductsScreen:ProductsScreen,
        TryScreen:TryScreen,
    } ,{
        headerMode:'none'
    }
   
  );

  
  export default createAppContainer(ProductsNavigator);