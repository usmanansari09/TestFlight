import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ImageBackground, StatusBar, TextInput, KeyboardAvoidingView, useWindowDimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { styles } from './style';
import mask from '../../assets/mask.png';
import arrowBack from '../../assets/arrowBack.png';
import edit from '../../assets/edit.png';
import userss from '../../assets/userss.png';
import exchange from '../../assets/exchange.png';
import filter from '../../assets/filter.png';
import clock from '../../assets/clock.png';
import circle from '../../assets/circle.png';
import plane from '../../assets/plane.png';
import downarrow from '../../assets/downarrow.png';
import duration from '../../assets/duration.png';
import emirates from '../../assets/emirates.png';
import location from '../../assets/location.png';
import calender from '../../assets/calender.png';
import bags from '../../assets/bags.png';
import { FlightSearch, LoginApi } from '../../APIstore/apiCalls';
import { errorAlert, successAlert } from '../../Theme/utils';
import moment from 'moment';
const FlightListScreen = ({ navigation, route }) => {
  const { obj } = route?.params ?? '';
  const [loader, setLoader] = useState(false);
  const [isExpand, setExpand] = useState(false);
  const [flightsData, setFlightsData] = useState();
  const data = [
    { key: 'item1', name: 'Item 1' },
    { key: 'item2', name: 'Item 2' },
    { key: 'item3', name: 'Item 3' },
  ];

  useEffect(() => {
    setLoader(true)
    const data = new FormData();
    data.append('journeyType', obj?.tripeType);
    data.append('OriginDestinationInfo[0][departureDate]', obj?.dateDepart);
    data.append('OriginDestinationInfo[0][returnDate]', obj?.dateArrival);
    data.append('OriginDestinationInfo[0][airportOriginCode]', 'DXB');
    data.append('OriginDestinationInfo[0][airportDestinationCode]', 'IST');
    data.append('class', obj?.tripeClass);
    data.append('adults', obj?.adultsVal);
    data.append('childs', obj?.childsVal);
    data.append('infants', '1');
    data.append('directFlight', '1');

    try {
      FlightSearch(data, async (res) => {
        if (res.sucess) {
          setFlightsData(res.sucess.data.flights)
          setLoader(false)
        } else {
          errorAlert(res.error.message);
          setLoader(false)
        }
      });
    } catch (error) {
      errorAlert(error);
      setLoader(false)
    }
  }, [])
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <MyStatusBar backgroundColor="#1A97D4" barStyle="light-content" /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        {loader ? (
          <View style={styles.centerIndicator}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <>
            <ImageBackground source={mask} resizeMode='cover'>
              <View style={styles.bgView}>
                <View style={styles.flexD}>
                  <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                    <Image source={arrowBack}></Image>
                  </TouchableOpacity>
                  <Text style={styles.routes}>{obj?.country} <TouchableOpacity><Image source={exchange}></Image></TouchableOpacity> {obj?.country2}</Text>
                  <Image source={edit}></Image>
                </View>
                <View style={styles.flexC}>
                  <Text style={styles.dateStyle}>{obj?.dateDepart} - {obj?.dateArrival}</Text>
                  <Text style={styles.adultStyle}>
                    <Image source={userss} style={styles.iconStyle}>
                    </Image>{obj?.adultsVal ? +' ' + obj?.adultsVal + ' ' + ' Adult ' : ''}
                    {obj?.childsVal ? +' ' + obj?.childsVal + ' ' + 'Children' : ''}</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.bodySection}>
              <View style={[styles.flexD, styles.extMargin]}>
                <Text style={styles.availableFlights}>69 flights <Text style={[styles.availableFlights, styles.extFont]}>Available</Text></Text>
                <View style={styles.filterView}>
                  <Image source={filter}></Image>
                </View>
              </View>

              <View style={{}}>
                <FlatList
                  data={flightsData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BookingDetail')} style={styles.conatinerList}>
                      <View style={styles.cardFlex}>
                        {item.originDestinationOptions[0]?.tourSegments.map((option, index) => (
                          <View style={styles.timehour}>
                            <Text style={styles.flightName}>{option.AirlineName}</Text>
                          </View>
                        ))}

                        <Text style={styles.flightPrice}>{item?.fareTotal.baseFare.CurrencyCode} {item.fareTotal.baseFare.Amount}</Text>

                      </View>
                      <View>
                        {item.originDestinationOptions[0]?.tourSegments.map((option, index) => (
                          <>
                            <View style={styles.cardFlex}>
                              <Text>{option.DepartureAirportCode}</Text>
                              {/* <Text>KHI</Text> */}
                              <Text>{option.ArrivalAirportCode}</Text>
                            </View>

                            <View style={styles.cardFlex}>
                              <Image source={circle} style={{ marginLeft: 6 }}></Image>
                              <Image source={plane}></Image>
                              <Image source={circle} style={{ marginRight: 6 }}></Image>
                            </View>
                            <View style={styles.cardFlex}>
                              <Text>{moment(option.DepartureDateTime).format('HH:mm')}</Text>
                              <Text>{moment(option.ArrivalDateTime).format('HH:mm')}</Text>
                            </View>
                          </>
                        ))}
                        <View style={styles.borderLine} />
                        <View style={styles.cardFlex}>
                          <View style={styles.containersBtn}>
                            <TouchableOpacity
                              style={styles.button}
                            >
                              <Text style={styles.buttonText}>Economy Light</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[styles.button, styles.extBtn]}
                            >
                              <Image source={bags}></Image>
                              <Text style={styles.buttonText}>1 x {item.passengers[0].Baggage[0]}</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                              style={styles.timehour}
                              onPress={() => setExpand(!isExpand)}
                            >
                              <Text style={[styles.buttonText, { color: "#1A97D4" }]}>Show Details</Text>
                              <Image source={downarrow}></Image>
                            </TouchableOpacity>

                          </View>
                        </View>

                        <View>
                          {isExpand && (
                            <>
                              <View style={{ marginTop: 10 }}>
                                <View style={styles.borderLine} />
                                <View style={styles.expandView}>
                                  <Image source={calender}></Image>
                                  <View>
                                    <Text style={styles.flightDate}>{moment(obj?.dateDepart, 'YYYY-MM-DD').format('DD MMM YYYY')}</Text>
                                    <Text style={styles.flightDay}>{moment(obj?.dateDepart, 'YYYY-MM-DD').format('dddd')}</Text>
                                  </View>
                                </View>
                              </View>

                              <View style={styles.mapView}>
                                <Image source={emirates} style={{ marginTop: 25 }}></Image>
                                <View style={styles.mapViewCol}>
                                  <Text style={styles.flightinnerDate}>{obj?.dateDepart} <Text style={styles.extFont}>{obj?.country}</Text></Text>
                                  <Image source={duration}></Image>

                                  <Text style={styles.flightinnerDate}>{obj?.dateArrival} <Text style={styles.extFont}>{obj?.country2}</Text></Text>
                                </View>
                                <View style={styles.centeral}>
                                  <View>
                                    {item.originDestinationOptions[0]?.tourSegments.map((option, index) => (
                                      <Text style={styles.flightinnerDate}>{option?.AirlineName}</Text>
                                    ))}
                                  </View>

                                  <Text style={[styles.flightinnerDate, styles.extFont]}>Travel time: <Text style={styles.extPrimaryColor}>1h 45m</Text></Text>
                                </View>
                              </View>

                              <View style={styles.layoverView}>
                                <Image source={clock}></Image>
                                <Text style={styles.layoverText}>3h 50m layover - Jinnah International (KHI)</Text>
                              </View>

                              <View style={styles.expandView}>
                                <Image source={location}></Image>
                                <View>
                                  <Text style={styles.flightDate}>{moment(obj?.dateArrival, 'YYYY-MM-DD').format('DD MMM YYYY')}</Text>
                                  <Text style={styles.flightDay}>{moment(obj?.dateArrival, 'YYYY-MM-DD').format('dddd')}</Text>
                                </View>
                              </View>
                              <View style={styles.arrivedView}>
                                <Text style={styles.flightDay}>Arrived at destination</Text>
                                <Text style={styles.flightDate}>{obj?.country2}</Text>
                              </View>
                              <View style={styles.cardbottom}>
                                <TouchableOpacity
                                  style={styles.button}
                                >
                                  <Text style={styles.buttonText}>Economy Light</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                  style={[styles.button, styles.extBtn]}
                                >
                                  <Image source={bags}></Image>
                                  <Text style={styles.buttonText}>1 x 20 kg</Text>
                                </TouchableOpacity>

                              </View>

                              <View style={styles.borderLine} />

                              <View style={styles.footer}>
                                <TouchableOpacity
                                  style={[styles.buttonContainer, styles.loginButton]}
                                  onPress={() => navigation.navigate('BookingDetail')}
                                >
                                  <Text style={styles.loginText}>Select Flight</Text>
                                </TouchableOpacity>


                                <TouchableOpacity
                                  style={styles.timehour}
                                  onPress={() => setExpand(!isExpand)}
                                >
                                  <Text style={[styles.buttonText, styles.extPrimaryColor]}>Hide Details</Text>
                                  <Image source={downarrow}></Image>
                                </TouchableOpacity>

                              </View>
                            </>
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </>
        )}

      </KeyboardAvoidingView>
    </View >

  );
};

export default FlightListScreen;
