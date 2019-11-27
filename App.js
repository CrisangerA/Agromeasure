import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { createDrawerNavigator } from 'react-navigation-drawer'; eliminar modulo
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// Screens
import Signin from './src/screens/Signin';
import CreateTerreno from './src/screens/CreateTerreno';
import CreateSemilla from './src/screens/CreateSemilla';
import Dashboard from './src/screens/Dashboard';
// Assets
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Size } from './src/Layout';
import MiFinca from './src/screens/MiFinca';
import Settings from './src/screens/Settings';
import Terreno from './src/screens/Terreno';

const DashStack = createStackNavigator(
  {
    T:{
      screen: Terreno,
      navigationOptions: {
        headerShown: false
      }
    },
    D:{
      screen: Dashboard,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: 'D'
  }
)

const FincaStack = createStackNavigator(
  {
    F: {
      screen: MiFinca,
      navigationOptions:{
        headerShown: false
      }
    },
    T: {
      screen: CreateTerreno,
      navigationOptions:{
        headerShown: false
      }
    },
    S: {
      screen: CreateSemilla,
      navigationOptions:{
        headerShown: false
      }
    }
  },
  {
    initialRouteName: 'F'
  }
)

const AppStack = createMaterialBottomTabNavigator(
  {
    D: {
      screen: DashStack,
      navigationOptions: {
        title: 'Dashboard',
      }
    },
    F: {
      screen: FincaStack,
      navigationOptions: {
        title: 'Mi Finca',
      }
    },
    C: {
      screen: Settings,
      navigationOptions: {
        title: 'Configuración',
      },
    }
  },
  {
    initialRouteName: 'D',
    backBehavior: 'history',
    sceneAnimationEnabled: true,
    activeColor: 'white',
    inactiveColor: 'white',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'D':
            return <Icon name="dashboard" size={30} color={tintColor} />
            break;
          case 'F':
            return <Icon name="grid-on" size={30} color={tintColor} />
            break;
          case 'C':
            return <Icon name="settings-applications" size={30} color={tintColor} />
            break;

          default:
            break;
        }
      }
    }),
    barStyle: {
      backgroundColor: 'chartreuse',
      paddingBottom: 5
    }
  }
)

const AuthStack = createStackNavigator(
  {
    L: {
      screen: Signin, navigationOptions: {
        headerShown: false
      }
    }
  }
);

const MyCustomNav = createAppContainer(
  createSwitchNavigator(
    {
      L: AuthStack,
      A: AppStack
    },
    {
      initialRouteName: 'L'
    }
  )
);
export default function App() {
  return (<MyCustomNav />);
}