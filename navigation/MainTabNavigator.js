import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

import Home from '../components/Home'
import ParentChoices from '../components/ParentChoices'
import CommonChoices from '../components/CommonChoices'
import Settings from '../components/Settings'
import About from '../components/About'

const HomeStack = createStackNavigator({
  Home: Home,
  ChoiceSelection: ParentChoices,
  Commons: CommonChoices,
  Options: Settings,
  About: About
})

export default createBottomTabNavigator({
  HomeStack
})
