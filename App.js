import React from 'react';
import {StatusBar,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from './pages/Explore';

const App = () => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            // trying to make the little dots appear under the names
            // tabBarIcon: ({ focused }) => {
            //   if(focused) {
            //     return <Text style={{fontSize:6, alignSelf:'center', marginBottom: 0}}>{'\u2B24'}</Text>
            //   }
            //     return null;
            // },
            tabBarIndicatorStyle: {display: 'none'},
            tabBarActiveTintColor: '#00008B',
            tabBarLabelStyle: { fontSize: 14 }
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
