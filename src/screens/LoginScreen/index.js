import React, { useState } from 'react';
import { View, Text, ActivityIndicator, ImageBackground, TextInput, KeyboardAvoidingView, useWindowDimensions, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import bgImage from '../../assets/bg.png';
import userImage from '../../assets/user.png';
import tickOp from '../../assets/tickop.png';
import { LoginApi } from '../../APIstore/apiCalls';
import { errorAlert, successAlert } from '../../Theme/utils';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const _onSignin = () => {
    if (email == '') {
      errorAlert('Please enter your Email');
      return
    }
    if (password.length < 8) {
      errorAlert('Password length should be 8 characters or more');
      return
    }
    if (password == '') {
      errorAlert('Please enter your Password');
      return
    }

    else {
      setLoader(true)
      const obj = {
        email: email,
        password: password
      }
      try {
        LoginApi(obj, async (res) => {
          if (res.sucess) {
            successAlert(res.sucess.message);
            setLoader(false);
            navigation.navigate('Home')
          } else {
            errorAlert(res.error);
            setLoader(false)
          }
        });
      } catch (error) {
        errorAlert(error);
        setLoader(false)
      }
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} resizeMode='stretch' style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          {loader ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <View style={styles.card}>
              <View style={styles.usericon}>
                <Image source={userImage}
                  style={styles.userImage}></Image>
                <Text style={styles.loginExist}>Login to Existing User</Text>
              </View>
              <View style={styles.inputStyles}>
                <Text style={styles.label}>Email *</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => { setEmail(text) }}
                  />

                </View>
                <Text style={styles.label}>Password *</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => { setPassword(text) }}
                  />

                </View>
              </View>

              <View style={styles.flexD}>
                <View style={styles.checkView}>

                  <TouchableOpacity
                    style={[
                      styles.checkboxContainer,
                      isChecked ? styles.checkboxChecked : styles.checkboxUnchecked,
                    ]}
                    onPress={handleToggle}
                  >
                    {isChecked && <View style={styles.checkIcon}>
                      <Image source={tickOp} />
                    </View>}
                  </TouchableOpacity>
                  <Text style={styles.checkViewLabel}>Remember Login Info</Text>
                </View>
                <TouchableOpacity onPress={() => { }}
                  style={styles.btnByRegister}
                >
                  <Text style={styles.textByFP}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => _onSignin()}
                style={[styles.buttonContainer, styles.loginButton]}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>

              <View
                style={styles.ftContainer}

              >
                <Text style={styles.btnText}>don’t have an account? <TouchableOpacity onPress={() => { navigation.navigate('SignupScreen') }}><Text style={styles.crAcc}>Create account</Text></TouchableOpacity></Text>
              </View>
            </View>
          )}

        </KeyboardAvoidingView>
      </ImageBackground >
    </View >

  );
};

export default LoginScreen;
