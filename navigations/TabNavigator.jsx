import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "../components/Home"
import Profile from "../components/Profile"
import Notifications from "../components/Notifications"
import Setting from "../components/Setting"
import HabitCreationModal from '../components/habit/HabitCreationModal';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle:{
          position:'absolute',
          bottom: 20,
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 20,
          height: 80
        }
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
              <MaterialCommunityIcons name="home" color={color} size={size} />
              <Text style={{fonSize: 12, color: "#16247d"}}>Home</Text>
            </View>
          ),
          
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          // tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
              <MaterialCommunityIcons name="bell" color={color} size={size} />
              <Text style={{fonSize: 12, color: "#16247d"}}>Updates</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                <MaterialCommunityIcons name="account" color={color} size={size} />
                <Text style={{fonSize: 12, color: "#16247d"}}>Profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <View style={{alignItems: "center", justifyContent: "center", top: 10}}>
                <MaterialCommunityIcons name="menu" color={color} size={size} />
                <Text style={{fonSize: 12, color: "#16247d"}}>Setting</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs