import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Fuel from '../screens/Fuel';
import LoginForm from '../components/LoginForm';
import Service from '../screens/Service';
import Stats from '../screens/Stats';
import AddRefuelling from '../screens/AddRefuelling';
import AddService from '../screens/AddService';
import Auth from '../components/LoginForm';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as authActions from '../redux/auth/authActions';
import {color} from 'react-native-reanimated';
import colors from '../constants/colors';
import {useDispatch} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {SafeAreaView, Button, View} from 'react-native';
import StartupScreen from '../screens/StartupScreen';
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

Fuel.navigationOptions = navData => {
  return {
    headerTitle: 'eee',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const MainNavigation = createDrawerNavigator(
  {
    Startup: StartupScreen,
    Paliwo: TabNavigation,
    Serwis: Service,
    Auth: Auth,
  },
  {
    contentOptions: {
      activeTintColor: colors.primaryColor,
    },
    contentComponent: props => {
      const dispatch = useDispatch();

      return (
        <View>
          <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <DrawerNavigatorItems {...props} />
            <Button
              title="logout"
              onPress={() => dispatch(authActions.authLogout())}
            />
          </SafeAreaView>
        </View>
      );
    },
  },
);

export default createAppContainer(MainNavigation);
