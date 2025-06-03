import { Tabs } from 'expo-router';
import React from 'react';
import { Platform} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: '#1DCD9F',
        headerTitleStyle: {
          color: 'white',
          fontSize: 24,
        },
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#333',
          height: 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 5,
        },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons size={26} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: 'Main',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}