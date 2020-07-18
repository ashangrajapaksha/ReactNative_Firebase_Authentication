import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  ImageBackground,
} from 'react-native';

import Firebase from '../Firebase/Firebase';

import BG from '../image/login.jpg';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {
    const {email, password} = this.state;

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Profile'))
      .catch((error) => console.log(error));
  };


  render() {
    return (
      <ImageBackground style={styles.container} source={BG} >
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.handleLogin}>
            Login
          </Text>
        </TouchableOpacity>
        <Button 
          title="Don't have an account yet? Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:600,
  },
  inputBox: {
    width:300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius:8,
    fontSize:18,
    color:"#fff",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSignup: {
    fontSize: 12,
  },
});
export default Login;
