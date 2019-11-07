import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
// Screens
import Signin from './src/screens/Signin';
import CreateTerreno from './src/screens/CreateTerreno';
import CreateSemilla from './src/screens/CreateSemilla';
import ConfirmSiembra from './src/screens/ConfirmSiembra';
import Dashboard from './src/screens/Dashboard';
// Assets
import { Size } from './src/Layout';

const dn = createDrawerNavigator(
  {
    L: Signin,
    T: CreateTerreno,
    S: CreateSemilla,
    C: ConfirmSiembra,
    D: Dashboard
  },
  {
    initialRouteName: 'T',
    drawerPosition: 'right',
    drawerWidth: Size.col5,    
    backBehavior: 'history',    
  }
);
const MyCustomNav = createAppContainer(dn);
export default function App() {
  return (<MyCustomNav />);
}