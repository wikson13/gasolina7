import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Fuel from '../screens/Fuel';
import LoginForm from '../components/LoginForm';
import Service from '../screens/Service';
import Stats from '../screens/Stats';
import AddRefuelling from '../screens/AddRefuelling';
export default createAppContainer(
  createSwitchNavigator({
    Fuel: Fuel,
    Service: Service,
    Stats: Stats,
    AddRefuelling: AddRefuelling,
  }),
);
