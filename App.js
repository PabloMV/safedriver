import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Login from './src/pages/Login'
import Type from './src/pages/steps/type'
import Car from './src/pages/steps/car'
import Payment from './src/pages/steps/payment'
import Ride from './src/pages/Ride'
import Home from './src/pages/Home'


export default function App() {
  return (
   <Home />
  )   
}

