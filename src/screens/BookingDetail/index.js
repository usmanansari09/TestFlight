import React, { useState } from 'react';
import { View, Text, ActivityIndicator, ImageBackground, TextInput, KeyboardAvoidingView, useWindowDimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { styles } from './style';
import UK from '../../assets/UK.png';
import arrowBack from '../../assets/arrowBack.png';
import julia from '../../assets/julia.png';
import date from '../../assets/date.png';
import DropDownPicker from 'react-native-dropdown-picker';
import { CountryPicker } from "react-native-country-codes-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-input'
import moment from 'moment';

const BookingDetail = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const countryRef = React.createRef();
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showDate, setshowDate] = useState(false);
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
  ]);
  const [country, setCountry] = useState(null);
  const onCountrySelect = (country) => {
    setCountry(country.name);
  };
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');


  const [firstNameL1, setFirstNameL1] = useState('');
  const [lastNameL1, setLastNameL1] = useState('');
  const [dobL1, setDOBL1] = useState('');
  const [phoneNoL1, setPhoneNoL1] = useState('');
  const [emailL1, setEmailL1] = useState('');
  const [passportNumberL1, setPassportNumberL1] = useState('');
  const [dob2L1, setDOB2L1] = useState('');

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
      hideDatePicker();
    }
  };
  const [showDate1, setShowDate1] = useState(false);
  const [showDate2, setShowDate2] = useState(false);
  const [showDate3, setShowDate3] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(new Date());

  const forDate1 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate1(currentDate);
    setShowDate1(!showDate1)
  };
  const forDate2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate2(currentDate);
    setShowDate2(!showDate2)
    // alert(date)
  };
  const forDate3 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate3(currentDate);
    setShowDate3(!showDate3)
    // alert(date)
  };
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="#1A97D4" barStyle="light-content" />
      <View style={styles.bgView}>
        <View style={styles.flexD}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image source={arrowBack}></Image>
          </TouchableOpacity>
          <Text style={styles.routes}>Your Flight Booking</Text>
          <Image source={julia} style={styles.iconImageval}></Image>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewCont}>
        <View style={styles.conatinerList}>
          <Text style={styles.travel}>Traveler 1: Adult (Lead)</Text>

          <View style={styles.borderLine} />

          <View style={styles.inputFlexD}>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>First Name *</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Julia"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setFirstNameL1(text)}
                />

              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Last Name *</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Robinson"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setLastNameL1(text)}
                />

              </View>
            </View>
          </View>


          <View style={[styles.inputFlexD, { marginTop: -1 }]}>
            <View style={[styles.innerinputFlexD]}>
              <Text style={styles.label}>Gender *</Text>
              <View style={[styles.inputContainer, { zIndex: 30000, position: "relative" }]}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder={'Male'}
                  arrowIconStyle={{ tintColor: '#E1EDF2', }}
                  placeholderStyle={styles.dropdownPlaceholderStyle}
                  dropDownContainerStyle={styles.dropDownContainerStyle}
                  textStyle={styles.HeadingText}
                  style={styles.buttonTrip}
                  listItemContainerStyle={styles.listItemContainerStyle}
                />
              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Date of Birth *</Text>
              <View style={styles.inputContainer}>
                <View style={styles.flexInput}>
              
                  <TouchableOpacity onPress={() => setShowDate1(!showDate1)} style={[styles.flexInput, { marginTop: 8 }]}>
                    <Image source={date}></Image>
                    <TextInput
                      style={styles.inputs}
                      editable={false}
                      value={date1}
                      placeholder={date1 ? moment(date1).format('YYYY/MM/DD') : 'YYYY/MM/DD'}
                      underlineColorAndroid="transparent"
                      onChangeText={text => setDOB2L1(text)}
                    />
                    {showDate1 && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date1}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={forDate1}
                      />
                    )}

                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Nationality *</Text>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.countryStyle}
              >
                <View style={styles.countryView}>
                  <Text style={styles.inputsCountry}>
                    {countryCode ? countryCode : <Image resizeMode="cover" width={27} source={UK}></Image>}
                  </Text>
                  <Text style={[styles.inputsCountry, { fontSize: 16, marginTop: 3 }]}>
                    {countryName ? countryName : 'United Kingdom'}
                  </Text>
                </View>
              </TouchableOpacity>
              <CountryPicker
                show={show}
                translation="eng"
                withFlag
                withCountryNameButton
                withCallingCodeButton
                pickerButtonOnPress={(item) => {
                  setCountryCode(item.flag);
                  setCountryName(item.name.en);
                  setShow(false);
                }}
              />
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Mobile *</Text>
            <View style={[styles.inputContainer]}>
              <PhoneInput
                initialCountry="us"
                style={{ marginTop: 10 }}
                ref={countryRef}
              />
              <TextInput
                style={[styles.inputs, { marginLeft: 10, position: "absolute", left: 80, top: -3 }]}
                placeholder="050 456 2598"
                underlineColorAndroid="transparent"
                onChangeText={text => setPhoneNoL1(text)}
              />
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Email *</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Enter your email address"
                underlineColorAndroid="transparent"
                onChangeText={text => setEmailL1(text)}
              />

            </View>
          </View>

          <Text style={styles.bookingText}>Booking confirmation will be sent to this email address.</Text>

          <View style={styles.passportView}>
            <Text style={styles.passportDetail}>Passport Details</Text>
            <Text style={styles.passportDetailDec}>Please enter details exactly as they appear on your passport/travel document.</Text>
          </View>

          <View style={styles.inputFlexD}>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Passport Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Your passport number"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setPassportNumberL1(text)}
                />

              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Date of Birth *</Text>
              <View style={styles.inputContainer}>
                <View style={styles.flexInput}>
              
                  <TouchableOpacity onPress={() => setShowDate2(!showDate2)} style={[styles.flexInput, { marginTop: 8 }]}>
                    <Image source={date}></Image>
                    <TextInput
                      style={styles.inputs}
                      editable={false}
                      value={date2}
                      placeholder={date1 ? moment(date2).format('YYYY/MM/DD') : 'YYYY/MM/DD'}
                      underlineColorAndroid="transparent"
                      onChangeText={text => setDOB2L1(text)}
                    />
                    {showDate2 && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date2}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={forDate1}
                      />
                    )}

                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>

        </View>


        <View style={styles.conatinerList}>
          <Text style={styles.travel}>Traveler 2: Adult</Text>

          <View style={styles.borderLine} />

          <View style={styles.inputFlexD}>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>First Name *</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Julia"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setFirstNameL1(text)}
                />

              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Last Name *</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Robinson"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setLastNameL1(text)}
                />

              </View>
            </View>
          </View>


          <View style={[styles.inputFlexD, { marginTop: -1 }]}>
            <View style={[styles.innerinputFlexD, { zIndex: 20000 }]}>
              <Text style={styles.label}>Gender *</Text>
              <View style={styles.inputContainer}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder={'Male'}
                  arrowIconStyle={{ tintColor: '#E1EDF2', }}
                  placeholderStyle={styles.dropdownPlaceholderStyle}
                  dropDownContainerStyle={styles.dropDownContainerStyle}
                  textStyle={styles.HeadingText}
                  style={styles.buttonTrip}
                  listItemContainerStyle={styles.listItemContainerStyle}
                />
              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Date of Birth *</Text>
              <View style={styles.inputContainer}>
                <View style={styles.flexInput}>
              
                  <TouchableOpacity onPress={() => setShowDate3(!showDate3)} style={[styles.flexInput, { marginTop: 8 }]}>
                    <Image source={date}></Image>
                    <TextInput
                      style={styles.inputs}
                      editable={false}
                      value={date3}
                      placeholder={date3 ? moment(date3).format('YYYY/MM/DD') : 'YYYY/MM/DD'}
                      underlineColorAndroid="transparent"
                      onChangeText={text => setDOB2L1(text)}
                    />
                    {showDate3 && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date3}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={forDate1}
                      />
                    )}

                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Nationality *</Text>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.countryStyle}
              >
                <View style={styles.countryView}>
                  <Text style={styles.inputsCountry}>
                    {countryCode ? countryCode : <Image resizeMode="cover" width={27} source={UK}></Image>}
                  </Text>
                  <Text style={[styles.inputsCountry, { fontSize: 16, marginTop: 3 }]}>
                    {countryName ? countryName : 'United Kingdom'}
                  </Text>
                </View>
              </TouchableOpacity>
              <CountryPicker
                show={show}
                translation="eng"
                withFlag
                withCountryNameButton
                withCallingCodeButton
                pickerButtonOnPress={(item) => {
                  setCountryCode(item.flag);
                  setCountryName(item.name.en);
                  setShow(false);
                }}
              />
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Mobile *</Text>
            <View style={[styles.inputContainer]}>
              <PhoneInput
                initialCountry="us"
                style={{ marginTop: 10 }}
                ref={countryRef}
              />
              <TextInput
                style={[styles.inputs, { marginLeft: 10, position: "absolute", left: 80, top: -3 }]}
                placeholder="050 456 2598"
                underlineColorAndroid="transparent"
                onChangeText={text => setPhoneNoL1(text)}
              />
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Email *</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Enter your email address"
                underlineColorAndroid="transparent"
                onChangeText={text => setEmailL1(text)}
              />

            </View>
          </View>

          <Text style={styles.bookingText}>Booking confirmation will be sent to this email address.</Text>

          <View style={styles.passportView}>
            <Text style={styles.passportDetail}>Passport Details</Text>
            <Text style={styles.passportDetailDec}>Please enter details exactly as they appear on your passport/travel document.</Text>
          </View>

          <View style={styles.inputFlexD}>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Passport Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Your passport number"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setPassportNumberL1(text)}
                />

              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Date of Birth *</Text>
              <View style={styles.inputContainer}>
                <View style={styles.flexInput}>
                  <Image source={date}></Image>
                  <TextInput
                    style={styles.inputs}
                    placeholder="DD/MM/YYYY"
                    underlineColorAndroid="transparent"
                    onChangeText={text => setDOB2L1(text)}
                  />

                  {/* <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="calendar"
                  onChange={handleDateChange}
                /> */}
                </View>

              </View>
            </View>
          </View>

        </View>


        <View style={styles.conatinerList}>
          <Text style={styles.travel}>Traveler 3: Child</Text>

          <View style={styles.borderLine} />

          <View style={styles.inputFlexD}>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>First Name *</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Julia"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setFirstNameL1(text)}
                />

              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Last Name *</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Robinson"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setLastNameL1(text)}
                />

              </View>
            </View>
          </View>


          <View style={[styles.inputFlexD, { marginTop: -1 }]}>
            <View style={[styles.innerinputFlexD, { zIndex: 20000 }]}>
              <Text style={styles.label}>Gender *</Text>
              <View style={styles.inputContainer}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder={'Male'}
                  arrowIconStyle={{ tintColor: '#E1EDF2', }}
                  placeholderStyle={styles.dropdownPlaceholderStyle}
                  dropDownContainerStyle={styles.dropDownContainerStyle}
                  textStyle={styles.HeadingText}
                  style={styles.buttonTrip}
                  listItemContainerStyle={styles.listItemContainerStyle}
                />
              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Date of Birth *</Text>
              <View style={styles.inputContainer}>
                <View style={styles.flexInput}>
              
                  <TouchableOpacity onPress={() => setShowDate3(!showDate3)} style={[styles.flexInput, { marginTop: 8 }]}>
                    <Image source={date}></Image>
                    <TextInput
                      style={styles.inputs}
                      editable={false}
                      value={date3}
                      placeholder={date3 ? moment(date3).format('YYYY/MM/DD') : 'YYYY/MM/DD'}
                      underlineColorAndroid="transparent"
                      onChangeText={text => setDOB2L1(text)}
                    />
                    {showDate3 && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date3}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={forDate1}
                      />
                    )}

                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Nationality *</Text>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.countryStyle}
              >
                <View style={styles.countryView}>
                  <Text style={styles.inputsCountry}>
                    {countryCode ? countryCode : <Image resizeMode="cover" width={27} source={UK}></Image>}
                  </Text>
                  <Text style={[styles.inputsCountry, { fontSize: 16, marginTop: 3 }]}>
                    {countryName ? countryName : 'United Kingdom'}
                  </Text>
                </View>
              </TouchableOpacity>
              <CountryPicker
                show={show}
                translation="eng"
                withFlag
                withCountryNameButton
                withCallingCodeButton
                pickerButtonOnPress={(item) => {
                  setCountryCode(item.flag);
                  setCountryName(item.name.en);
                  setShow(false);
                }}
              />
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Mobile *</Text>
            <View style={[styles.inputContainer]}>
              <PhoneInput
                initialCountry="us"
                style={{ marginTop: 10 }}
                ref={countryRef}
              />
              <TextInput
                style={[styles.inputs, { marginLeft: 10, position: "absolute", left: 80, top: -3 }]}
                placeholder="050 456 2598"
                underlineColorAndroid="transparent"
                onChangeText={text => setPhoneNoL1(text)}
              />
            </View>
          </View>

          <View style={[styles.innerinputFlexD, { width: "100%" }]}>
            <Text style={styles.label}>Email *</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Enter your email address"
                underlineColorAndroid="transparent"
                onChangeText={text => setEmailL1(text)}
              />

            </View>
          </View>

          <Text style={styles.bookingText}>Booking confirmation will be sent to this email address.</Text>

          <View style={styles.passportView}>
            <Text style={styles.passportDetail}>Passport Details</Text>
            <Text style={styles.passportDetailDec}>Please enter details exactly as they appear on your passport/travel document.</Text>
          </View>

          <View style={styles.inputFlexD}>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Passport Number</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Your passport number"
                  underlineColorAndroid="transparent"
                  onChangeText={text => setPassportNumberL1(text)}
                />

              </View>
            </View>
            <View style={styles.innerinputFlexD}>
              <Text style={styles.label}>Date of Birth *</Text>
              <View style={styles.inputContainer}>
                <View style={styles.flexInput}>
                  <Image source={date}></Image>
                  <TextInput
                    style={styles.inputs}
                    placeholder="DD/MM/YYYY"
                    underlineColorAndroid="transparent"
                    onChangeText={text => setDOB2L1(text)}
                  />

                  {/* <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="calendar"
                  onChange={handleDateChange}
                /> */}
                </View>

              </View>
            </View>
          </View>

        </View>


        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton, styles.extLogin]}
          >
            <Text style={[styles.loginText, { color: "#1A97D4" }]}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton, { marginLeft: 10 }]}
          >
            <Text style={styles.loginText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >

  );
};

export default BookingDetail;
