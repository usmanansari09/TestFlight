import React, { useEffect, useState } from 'react';
import { View, Text, Modal, ActivityIndicator, Button, ImageBackground, TextInput, KeyboardAvoidingView, useWindowDimensions, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import bgImage from '../../assets/bg.png';
import checkedImage from '../../assets/checked.png';
import tickOp from '../../assets/tickop.png';
import { LoginApi, OTPVerify, Register } from '../../APIstore/apiCalls';
import { errorAlert, setStorage, successAlert } from '../../Theme/utils';
import { expressions } from '../../utils/functions';
import DeviceInfo from 'react-native-device-info';
const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loaderOTP, setLoaderOTP] = useState(false);
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const otpInputs = [null, null, null, null, null, null];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resData, setResponsedData] = useState();
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const handleOtpInput = (text, index) => {
    if (text.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
      if (text.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const fullOTP = otp.join('');
    let brand = DeviceInfo.getBrand();
    if (fullOTP.length < 6) {
      errorAlert('Please enter otp');
      return
    }

    else {
      setLoaderOTP(true)
      const obj = {
        user_id: resData.user_id,
        otp: fullOTP,
        app: "mobile",
        device_type: brand
      }

      try {
        OTPVerify(obj, async (res) => {
          if (res.sucess) {
            successAlert(res.sucess.message);
            setLoaderOTP(false);
            navigation.navigate('LoginScreen')
          } else {
            errorAlert(res.error);
            setLoaderOTP(false)
          }
        });
      } catch (error) {
        errorAlert(error);
        setLoaderOTP(false)
      }
    }
    closeModal();
  };
  const _onSignup = () => {

    if (fullName == '') {
      errorAlert('Please enter your First Name')
      return
    }
    if (lastName === '') {
      errorAlert('Please enter your Last Name');
      return
    }
    if (email === '') {
      errorAlert('Please enter your Email');
      return
    }
    if (!expressions.email.test(email) || email.includes(' ')) {
      errorAlert('Enter valid Email');
      return
    }
    if (phone === '') {
      errorAlert('Please enter your Phone Number');
      return
    }
    if (password.length < 8) {
      errorAlert('Password length should be 8 characters long');
      return
    }
    if (password == '') {
      errorAlert('Please enter Password');
      return
    }
    if (confirmPassword == '') {
      errorAlert('Please enter Confirm Password');
      return
    }
    if (password != confirmPassword) {
      errorAlert('Your Password and Confirm Password are not macted');
      return
    }
    if (!isChecked) {
      errorAlert('Please agree to the terms');
      return
    }

    else {
      setLoader(true)
      const obj = {
        firstName: fullName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password,
        refer_user: ""
      }
      try {
        Register(obj, async (res) => {
          if (res.sucess) {
            successAlert(res.sucess.message);
            setResponsedData(res.sucess.data)
            successAlert('OPT has been sent to your email');
            setLoader(false);
            openModal();
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
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <SafeAreaView style={{ flex: 1, marginTop: 70 }}>
            <ScrollView style={{ flex: 1 }}>
              {loader ? (
                <View style={styles.centerIndicator}>
                  <ActivityIndicator size="large" color="#000" />
                </View>
              ) : (
                <View style={styles.card}>
                  <View style={styles.usericon}>

                    <Text style={styles.loginExist}>Register for New User</Text>
                  </View>
                  <View style={styles.inputStyles}>
                    <Text style={styles.label}>Full Name *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Full Name"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setFullName(text)}
                      />

                    </View>
                    <Text style={styles.label}>Last Name *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Full Name"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setLastName(text)}
                      />

                    </View>
                    <Text style={styles.label}>Email *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setEmail(text)}
                      />

                    </View>
                    <Text style={styles.label}>Phone # *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Phone #"
                        keyboardType="numeric"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setPhone(text)}
                      />

                    </View>
                    <Text style={styles.label}>Password *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setPassword(text)}
                      />

                    </View>
                    <Text style={styles.label}>Confirm Password *</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputs}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setConfirmPassword(text)}
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
                      <Text style={styles.checkViewLabel}>I agree to the terms of service and privacy policy</Text>
                    </View>

                  </View>

                  <TouchableOpacity onPress={() => _onSignup()}
                    style={[styles.buttonContainer, styles.loginButton]}
                  >
                    <Text style={styles.loginText}>Register</Text>
                  </TouchableOpacity>

                  <View
                    style={styles.ftContainer}
                  // onPress={() => this.onClickListener('sign up')}
                  >
                    <Text style={styles.btnText}>already have an account?<TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}><Text style={styles.crAcc}> Login</Text></TouchableOpacity></Text>
                  </View>
                </View>
              )}

            </ScrollView>
          </SafeAreaView>
          <Modal visible={isModalVisible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>

              <View style={styles.otpContainer}>
                <Image source={checkedImage} resizeMode="cover"></Image>
                <Text style={styles.enterOtpText}>Verify Code</Text>
                <Text style={styles.otpText}>We sent an OTP code on your Email.</Text>
                {loaderOTP ? (
                  <ActivityIndicator size="large" color="#000" />
                ) : (
                  <View style={styles.otpInputContainer}>
                    {otp.map((digit, index) => (
                      <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        onChangeText={(text) => handleOtpInput(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(input) => (otpInputs[index] = input)}
                      />
                    ))}

                  </View>
                )}
                <TouchableOpacity onPress={() => handleSubmit()}
                  style={[styles.buttonContainer, {
                    paddingLeft: 40,
                    paddingRight: 40,
                  }, styles.loginButton]}
                >
                  <Text style={styles.loginText}>Validate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </ImageBackground >
    </View >

  );
};

export default SignupScreen;
