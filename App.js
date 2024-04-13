import React from 'react';
import Calculator from './Screens/Calculator.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
