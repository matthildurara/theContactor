import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

/* import view components*/
import Main from '../views/Main';
import Contacts from '../views/Contacts';


const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='Contacts' component={Contacts} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
