import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "../components/Home"
import Profile from "../components/Profile"
import Notifications from "../components/Notifications"
import Setting from "../components/Setting"


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <KeyboardAvoidingView style={{height: 790}}>
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
              <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text>
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
              <Text style={{fontSize: 12, color: "#16247d"}}>Updates</Text>
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
                <Text style={{fontSize: 12, color: "#16247d"}}>Profile</Text>
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
                <Text style={{fontSize: 12, color: "#16247d"}}>Setting</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    </KeyboardAvoidingView>
  );
}

export default MyTabs