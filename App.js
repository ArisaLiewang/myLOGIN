import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkUser = () => {
    if (email != 'test@test.com') {
      Alert.alert(
        'Login Failed',
        'Your email or password is incorrect. Please try again.',
      );
      return;
    }
    if (password != '12345678') {
      Alert.alert(
        'Login Failed',
        'Your email or password is incorrect. Please try again.',
      );
      return;
    }

    Alert.alert('Login Success');
  };

  return (
    <View style={style.container}>
      <Text style={style.login}>myLOGIN</Text>
      <TextInput
        placeholder="Email"
        style={style.input}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={style.input}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity style={style.btn} onPress={checkUser}>
        <Text style={style.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: 'blue',
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 50,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 40,
    height: 40,
    width: 250,
    paddingLeft: 20,
    margin: 10,
  },
  btn: {
    backgroundColor: 'blue',
    height: 40,
    width: 250,
    borderRadius: 40,
    margin: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 6,
    fontWeight: '600',
  },
});

export default App;
