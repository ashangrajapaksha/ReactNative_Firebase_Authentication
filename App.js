import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './src/Component/Login';
import Signup from './src/Component/Signup';
import Profile from './src/Component/Profile';
import Navigater from './src/Navigater'


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Navigater />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
