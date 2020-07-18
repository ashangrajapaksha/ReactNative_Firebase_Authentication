import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Profile from './Component/Profile';

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(SwitchNavigator);
