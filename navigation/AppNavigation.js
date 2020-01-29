import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Fuel from '../screens/Fuel';
import LoginForm from '../components/LoginForm';
import Service from '../screens/Service';
import Stats from '../screens/Stats';
import AddRefuelling from '../screens/AddRefuelling';
import AddService from '../screens/AddService';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-reanimated';
import colors from '../constants/colors';

const iconStyle = {
  size: 30,
  color: '#57606f',
};

//
// const MainNavigation = createStackNavigator({
//     Fuel: Fuel,
//     Service: Service,
//     Stats: Stats,
//     AddRefuelling: AddRefuelling,
// });
const FuelNavigation = createStackNavigator({
  Fuel: Fuel,
  AddRefuelling: AddRefuelling,
});

const ServiceNavigation = createStackNavigator({
  Service: Service,
  AddService: AddService,
});

const StatsNavigation = createStackNavigator({
  Stats: Stats,
});

const TabNavigation = createBottomTabNavigator(
  {
    Fuel: {
      screen: FuelNavigation,
      navigationOptions: {
        tabBarLabel: 'Paliwo',
        tabBarIcon: tabInfo => {
          return (
            <Icon
              name="gas-station"
              size={iconStyle.size}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Service: {
      screen: ServiceNavigation,
      navigationOptions: {
        tabBarLabel: 'Serwis',
        tabBarIcon: tabInfo => {
          return (
            <Icon
              name="wrench"
              size={iconStyle.size}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Stats: {
      screen: StatsNavigation,
      navigationOptions: {
        tabBarLabel: 'Statystyki',
        tabBarIcon: tabInfo => {
          return (
            <Icon
              name="chart-areaspline"
              size={iconStyle.size}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#192a56',
    },
  },
);

export default createAppContainer(TabNavigation);
