import React from 'react';
import Calculator from './Screens/Calculator.js';
import Third from './Screens/Third.js';
import Second from './Screens/Second.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#3498db',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: 'Calculator',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="calculator" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Second"
          component={Second}
          options={{
            tabBarLabel: 'Second',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="arrow-left" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Third"
          component={Third}
          options={{
            tabBarLabel: 'Third',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="arrow-left" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
