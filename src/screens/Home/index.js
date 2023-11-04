import { PickerIOS } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Share, FlatList, TouchableOpacity, Text, TextInput, Button, StyleSheet, Image, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './style';
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/Fontisto'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import AntDesignHeart from 'react-native-vector-icons/AntDesign'
import { errorAlert } from '../../Theme/utils';
import moment from 'moment';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import julia from '../../assets/julia.png';
import hand from '../../assets/hand.png';
import noti from '../../assets/noti.png';
import listlines from '../../assets/listlines.png';
import plane from '../../assets/plane.png';
import rentcar from '../../assets/rentcar.png';
import hotel from '../../assets/hotel.png';
import mask from '../../assets/mask.png';
import fly from '../../assets/fly.png';
import date from '../../assets/date.png';
import offer from '../../assets/offer.png';
import dwn from '../../assets/dwn.png';
const FlightSearch = ({ navigation }) => {
  const dataForOffer = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ]
  const dataPlaces = [
    {
      id: 1,
      img: require('../../assets/burj.png'),
      name: 'Burj Khalifa',
      fAmount: '$238',
      lAmount: '#1350'
    },
    {
      id: 2,
      img: require('../../assets/tower.png'),
      name: 'Queens’s Gambit',
      fAmount: '$196',
      lAmount: '$2345'
    },
    {
      id: 3,
      img: require('../../assets/burj.png'),
      name: 'Burj Khalifa',
      fAmount: '$238',
      lAmount: '$6432'

    }
  ]
  const dataPackages = [
    {
      id: 1,
      img: require('../../assets/taj.png'),
      name: 'Burj Khalifa',
      fAmount: '$238',
      lAmount: '#1350'
    },
    {
      id: 2,
      img: require('../../assets/entrance.png'),
      name: 'Queens’s Gambit',
      fAmount: '$196',
      lAmount: '$2345'
    },
    {
      id: 3,
      img: require('../../assets/taj.png'),
      name: 'Burj Khalifa',
      fAmount: '$238',
      lAmount: '$6432'

    }
  ]
  const [activeButton, setActiveButton] = useState(1);
  const [tripeType, setTripType] = useState('OneWay');
  const [activeButtonInner, setActiveButtonInner] = useState(2);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Business');
  const [items, setItems] = useState([
    { label: 'Business', value: 'Business' },
    { label: 'First', value: 'First' },
    { label: 'Economy', value: 'Economy' },
    { label: 'PremiumEconomy', value: 'PremiumEconomy' },
  ]);

  const handlePress = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const [country, setCountry] = useState(null);
  const [country2, setCountry2] = useState(null);
  const [dateDepart, setDepartureDate] = useState(new Date());
  const [dateArrival, setArrivalDate] = useState(new Date());
  const [showView, setShownHideView] = useState(false);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [adultsVal, setAdult] = useState(false);
  const [childsVal, setChilds] = useState(false);
  const [showDate1, setShowDate1] = useState(false);
  const [showDate2, setShowDate2] = useState(false);
  const handlePressInner = (buttonNumber, value) => {
    setActiveButtonInner(buttonNumber);
    setTripType(value)
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Flight Booking Share Data',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.mainCard}>
        <View style={styles.cardStyle1}>
          <Image source={offer} style={styles.offerImg}></Image>
          <View style={styles.Viewmain}>
            <Text style={styles.mainHeading}>Get Up to 20% OFF On Flights with Us</Text>
            <Text style={styles.mainDesc}>Break The Booking Routine NOW</Text>
          </View>
          <View style={styles.borderLine} />
          <View style={styles.mainFooter}>
            <View style={styles.innerRow}>
              <Text style={styles.codeText}>Code</Text>
              <View style={styles.x7CodeView}>
                <Text style={styles.x7CodeText}>X7HJ3</Text>
              </View>
            </View>
            <View style={styles.innerRow}>
              <TouchableOpacity onPress={() => onShare} style={styles.shareView}>
                <FontAwesomeIcon name='share-a' color={'#1A97D4'} size={20}></FontAwesomeIcon>
                <Text style={styles.shareText}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookView}>
                <Text style={styles.bookText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
  const renderItemPlace = ({ item }) => {
    return (
      <View style={styles.maincard2}>
        <ImageBackground source={item.img} resizeMode="contain" style={styles.placesImg}>
          <View style={styles.mainViewIcon}>
            <View style={styles.viewIconText}>
              <AntDesignIcon name='star' color={'#FF9900'} size={15} />
              <Text style={styles.pointText}>4.9</Text>
            </View>
            <AntDesignHeart name='hearto' color={'#fff'} size={15} />
          </View>

          <View style={styles.footerView}>
            <Text style={styles.ItemName}>{item.name}</Text>
            <Text style={styles.amount}>{item.fAmount} <Text style={styles.amount2}>/ Per person</Text></Text>
          </View>

        </ImageBackground>
      </View>
    )
  }
  const renderItemPackages = ({ item }) => {
    return (
      <View style={styles.maincard2}>
        <ImageBackground source={item.img} resizeMode="contain" style={styles.placesImg}>
          <View style={styles.mainViewIcon}>
            <View style={styles.viewIconText}>
              <AntDesignIcon name='star' color={'#FF9900'} size={15} />
              <Text style={styles.pointText}>4.9</Text>
            </View>
            <AntDesignHeart name='hearto' color={'#fff'} size={15} />
          </View>

          <View style={styles.amountView}>
            <Text style={styles.lamount}>{item.lAmount}</Text>
          </View>

        </ImageBackground>
        <View style={styles.ftView}>
          <Text style={styles.nameHotel}>Taj Mehal</Text>
          <Text style={styles.locText}>Agra, India</Text>
        </View>
        <View style={styles.viewbtm}>
          <FontAwesomeIcon name="calendar" size={16} color={'#1A97D4'} />
          <Text style={styles.btmtext}>4D/2N</Text>
          <AntDesignHeart name="addusergroup" size={16} color={'#1A97D4'} />
          <Text style={styles.btmtext}>People: 8</Text>
        </View>
      </View>
    )
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDepartureDate(currentDate);
    setShowDate1(!showDate1)
  };
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDepartureDate(currentDate);
    setShowDate2(!showDate2)
  };
  const _onSearch = () => {
    if (!dateDepart) {
      errorAlert('Please select departure date');
      return;
    }
    if (tripeType == 'Return') {
      if (!dateArrival) {
        errorAlert('Please select arrival date');
        return;
      }
    }
    if (!adultsVal) {
      errorAlert('Please enter Adult');
      return;
    }
    else {
      let object = {
        tripeClass: value ? value : '',
        tripeType: tripeType ? tripeType : '',
        country: country ? country : 'DXB',
        country2: country2 ? country2 : 'IST',
        dateDepart: moment(dateDepart).format('YYYY-MM-DD') ? moment(dateDepart).format('YYYY-MM-DD') : '',
        dateArrival: moment(dateArrival).format('YYYY-MM-DD') ? moment(dateArrival).format('YYYY-MM-DD') : '',
        adultsVal: adultsVal ? adultsVal : '',
        childsVal: childsVal ? childsVal : ''
      }
      navigation.navigate('FlightListScreen', { obj: object })
    }
  }
  const airportData = [
    { name: 'Dubai Airport', code: 'DXB' },
  ];
  const handleAirportSelect = (data, details) => {
    const airportName = details?.description;
    const selectedAirport = airportData.find((airport) => airport.name === airportName);
    if (selectedAirport) {
      const airportCode = selectedAirport.code;
      setCountry(airportCode)
    } else {
    }
  };
  const handleAirportSelect2 = (data, details) => {
    const airportName = details.description;
    const selectedAirport = airportData.find((airport) => airport.name === airportName);

    if (selectedAirport) {
      const airportCode = selectedAirport.code;
      setCountry2(airportCode)
    } else {
    }
  };
  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 60, backgroundColor: 'rgba(255, 255, 255, 0.7)', }}>
        <View style={styles.container}>
          <SafeAreaView />
          <View style={styles.innerContainer}>
            <View style={styles.headers}>
              <Image source={julia} style={styles.iconImg}></Image>
              <View style={styles.mainView}>
                <View style={styles.headerName}>
                  <Text style={styles.welcomeText}>Welcome</Text>
                  <Image source={hand}></Image>
                </View>
                <Text style={styles.nameText}>Julia</Text>

              </View>
            </View>
            <View style={styles.imgCont}>
              <Image source={noti} style={{ left: 30 }} ></Image>
              <Image source={listlines} ></Image>
            </View>
          </View>

          <ImageBackground source={mask} resizeMode='stretch' style={styles.imageData}>
            <Text style={styles.destinationText}>Where’s your next destination?</Text>
          </ImageBackground>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.tabsContainer}>
              <View style={styles.containersBtn}>
                <TouchableOpacity
                  style={[styles.button, activeButton === 1 && styles.activeButton]}
                  onPress={() => handlePress(1)}
                >
                  <Image source={plane}></Image>
                  <Text style={styles.flightName}>Flights</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, activeButton === 2 && styles.activeButton]}
                  onPress={() => handlePress(2)}
                >
                  <Image source={hotel}></Image>
                  <Text style={styles.flightName}>Hotel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, activeButton === 3 && styles.activeButton]}
                  onPress={() => handlePress(3)}
                >
                  <Image source={rentcar}></Image>
                  <Text style={styles.flightName}>Car Rental</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.innerCont}>
            {activeButton == 1 && (
              <View style={{}}>
                <TouchableOpacity
                  style={styles.activeButtonInner2}
                >
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'Business'}
                    arrowIconStyle={{ tintColor: '#E1EDF2', left: 10 }}
                    placeholderStyle={styles.dropdownPlaceholderStyle}
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    textStyle={styles.HeadingText}
                    style={[styles.buttonTrips, { width: "33%", }]}
                    listItemContainerStyle={styles.listItemContainerStyle}
                  />
                </TouchableOpacity>
                <View style={styles.containersBtnTrip}>
                  <TouchableOpacity
                    style={[styles.buttonTrip, activeButtonInner === 2 && styles.activeButtonInner]}
                    onPress={() => handlePressInner(2, 'OneWay')}
                  >
                    <Text style={[styles.buttonText, activeButtonInner === 2 && styles.buttonTextInner]}>One Way</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.buttonTrip, { marginLeft: 5 }, activeButtonInner === 3 && styles.activeButtonInner]}
                    onPress={() => handlePressInner(3, 'Return')}
                  >
                    <Text style={[styles.buttonText, activeButtonInner === 3 && styles.buttonTextInner]}>Round Trip</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <View style={styles.innerView}>
            {activeButton == 1 && (activeButtonInner == 3 || activeButtonInner == 2) && (
              <>
                <View style={styles.countryView}>

                  <Text style={styles.mLabel}>
                    Flying from
                  </Text>
                  <View style={styles.flexInput}>
                    <Image source={fly}></Image>
                    <GooglePlacesAutocomplete
                      styles={{

                        container: {
                          marginVertical: -12,

                        },
                        textInput: {
                          color: '#A1ADB2',
                          fontFamily: 'Montserrat-Regular',
                          fontSize: 14,
                          fontStyle: 'normal',
                          fontWeight: '500',
                        },
                      }}
                      placeholder="Dubai (DXB)"
                      onPress={handleAirportSelect()}
                      query={{
                        key: 'AIzaSyCuC0N234IJDgCJLD6pV3YHBh0NcL29Tuw',
                        language: 'en',
                        types: 'airport',
                      }}
                    />

                  </View>
                </View>
                <View style={styles.countryView}>
                  <Text style={styles.mLabel}>
                    Flying to
                  </Text>
                  <View style={styles.flexInput}>
                    <Image source={fly}></Image>
                    <GooglePlacesAutocomplete
                      styles={{

                        container: {
                          marginVertical: -12,
                        },
                        textInput: {
                          color: '#A1ADB2',
                          fontFamily: 'Montserrat-Regular',
                          fontSize: 14,
                          fontStyle: 'normal',
                          fontWeight: '500',
                        },
                      }}
                      placeholder="Sharjah (SHJ)"
                      onPress={handleAirportSelect2}
                      query={{
                        key: 'AIzaSyCuC0N234IJDgCJLD6pV3YHBh0NcL29Tuw',
                        language: 'en',
                        types: 'airport',
                      }}
                    />

                  </View>
                </View>
                <View style={styles.depView}>
                  <Text style={styles.mLabel}>
                    Departure
                  </Text>

                  <TouchableOpacity onPress={() => setShowDate1(!showDate1)} style={[styles.flexInput, { marginTop: 8 }]}>
                    <Image source={date}></Image>
                    <TextInput
                      style={styles.inputss}
                      editable={false}
                      value={dateDepart}
                      placeholder={dateDepart ? moment(dateDepart).format('YYYY/MM/DD') : 'DD/MM/YYYY'}
                      underlineColorAndroid="transparent"
                      onChangeText={text => setDOB2L1(text)}
                    />
                    {showDate1 && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={dateDepart}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}

                  </TouchableOpacity>
                </View>
                {activeButton == 1 && activeButtonInner == 3 && (
                  <View style={styles.depView}>
                    <Text style={styles.mLabel}>
                      Arrival
                    </Text>
                    <TouchableOpacity onPress={() => setShowDate2(!showDate2)} style={[styles.flexInput, { marginTop: 8 }]}>
                      <Image source={date}></Image>
                      <TextInput
                        style={styles.inputs}
                        editable={false}
                        value={dateArrival}
                        placeholder={dateArrival ? moment(dateArrival).format('YYYY/MM/DD') : 'YYYY/MM/DD'}
                        underlineColorAndroid="transparent"
                        onChangeText={text => setDOB2L1(text)}
                      />
                      {showDate2 && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={dateArrival}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={onChange2}
                        />
                      )}

                    </TouchableOpacity>
                  </View>
                )}
                <View style={styles.paddHoriz}>
                  {showView && (
                    <>
                      <View style={styles.inputFlexD}>
                        <View style={styles.innerinputFlexD}>
                          <Text style={styles.mLabel}>Adults *</Text>
                          <View style={styles.inputContainers}>
                            <TextInput
                              style={styles.inputss}
                              placeholder="1"
                              underlineColorAndroid="transparent"
                              onChangeText={adult => setAdult(adult)}
                            />

                          </View>
                        </View>
                        <View style={styles.innerinputFlexD}>
                          <Text style={styles.mLabel}>Child</Text>
                          <View style={styles.inputContainers}>
                            <TextInput
                              style={styles.inputss}
                              placeholder="2"
                              underlineColorAndroid="transparent"
                              onChangeText={child => setChilds(child)}
                            />
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => _onSearch()}
                        style={[styles.buttonContainer, styles.loginButton]}
                      >
                        <Text style={styles.loginText}>Search</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  <TouchableOpacity style={styles.ViewMore} onPress={() => { setShownHideView(!showView) }}>
                    <Text style={styles.viewMoreText}>{showView ? 'Hide' : 'View More'}</Text>
                    <Image source={dwn}></Image>
                  </TouchableOpacity>

                </View>
              </>
            )}

          </View>

          <View>
            <View style={styles.ViewAllOffer}>
              <Text style={styles.offerText}>
                Limited Offers
              </Text>
              <Text style={styles.ViewText}>
                View All
              </Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dataForOffer}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View>
            <View style={styles.ViewAllOffer}>
              <Text style={styles.offerText}>
                Best Places
              </Text>
              <Text style={styles.ViewText}>
                View All
              </Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dataPlaces}
              renderItem={renderItemPlace}
              keyExtractor={(item) => item.id}
            />
          </View>


          <View>
            <View style={styles.ViewAllOffer}>
              <Text style={styles.offerText}>
                Best Packages
              </Text>
              <Text style={styles.ViewText}>
                View All
              </Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dataPackages}
              renderItem={renderItemPackages}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};


export default FlightSearch;
