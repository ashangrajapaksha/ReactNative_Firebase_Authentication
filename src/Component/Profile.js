import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.container2}>
      <Text>Ashan</Text>
      </View>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  container2:{
    flex:2,
    backgroundColor:'green',

  }
});
export default Profile;
