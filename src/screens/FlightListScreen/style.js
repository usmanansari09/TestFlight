import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // paddingVertical:20
  },
  flexD: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
    marginHorizontal: 20,
    // gap: 16,
    marginTop: 20
  },
  centerIndicator: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    height: "100%"
  },
  cardFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
    marginHorizontal: 10,
    marginTop: 10
  },
  bgView: {
    height: 130
  },
  flexC: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    gap: 10
  },
  dateStyle: {
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    fontFeatureSettings: "'clig' off, 'liga' off",
  },
  adultStyle: {
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    fontFeatureSettings: "'clig' off, 'liga' off",
  },
  iconStyle: {
    width: 10,
    height: 10
  },
  routes: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  bodySection: {
    // flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  filterView: {
    borderRadius: 50,
    backgroundColor: '#1A97D4',
    shadowColor: 'rgba(26, 151, 212, 0.20)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    position: "absolute",
    padding: 10,
    right: 0
  },
  availableFlights: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 28,
    textTransform: 'capitalize',
  },
  conatinerList: {
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: 15,
    paddingBottom: 10
  },
  timehour: {
    flexDirection: "row", alignItems: "center", gap: 2
  },
  expandView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
    marginHorizontal: 20,
    gap: 5
  },
  flightName: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 28,
    textTransform: 'capitalize',

  },
  flightPrice: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 28,
    textTransform: 'uppercase',

  },
  borderLine: {
    borderBottomColor: "#E1EDF2", borderBottomWidth: 1, marginHorizontal: 20, marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
    textTransform: 'capitalize',
    alignSelf: "center"
  },
  button: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    backgroundColor: '#F2FBFF',
    width: "33%"
  },
  containersBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  flightDate: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 19.6,
  },
  flightDay: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.6,
  },
  flightinnerDate: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 19.6,
  },
  layoverView: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    backgroundColor: '#F2FBFF',
    padding: 10,
    marginTop: 20,
    width: "92%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 7
  },
  layoverText: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16.8,
  },
  mapView: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  mapViewCol: { flexDirection: "column", gap: 10 },
  centeral: { position: "absolute", right: "32%", },
  arrivedView: {
    flexDirection: "column",
    marginTop: 5,
    marginHorizontal: 55,
    gap: 5
  },
  cardbottom: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    // justifyContent: "space-between",
    width: "100%",
    marginTop: 15
  },
  extBtn: { marginLeft: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 3 },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginTop: 20
    // width: "100%",
  },
  buttonContainer: {
    // marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "40%",
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  loginButton: {
    borderRadius: 30,
    backgroundColor: '#1A97D4', // Default background color if the variable is not set
    shadowColor: 'rgba(26, 151, 212, 0.20)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 5, // Elevation is used on Android for shadow
    padding: 12,
  },
  loginText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
  },







  card: {
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.07,
    shadowRadius: 35,
    // width: 370,
    // height: 500,
    borderRadius: 20,
    marginHorizontal: 20,
    // justifyContent:"center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  userImage: {
    width: 54,
    height: 54
  },
  loginExist: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
    textTransform: 'capitalize',
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: "90%",
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E6F2F7',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },

  ftContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    borderRadius: 30,
    backgroundColor: 'transparent',
  },


  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: '#A1ADB2',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  textByRegister: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  textByFP: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  label: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
    padding: 7
  },

  usericon: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 20
  },
  inputStyles: {
    marginTop: 20
  },

  checkboxContainer: {
    width: 20,
    height: 18,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#1A97D4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#1A97D4',
    // borderColor: 'green',
  },
  checkboxUnchecked: {
    backgroundColor: 'transparent',
  },
  checkViewLabel: {
    color: '#37393A',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: "normal",
    fontFamily: "Montserrat-Regular",
    marginLeft: 10
  },
  checkView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20
  },
  extMargin: { marginBottom: 20 },
  extFont: { fontWeight: '400' },
  extPrimaryColor: { color: "#1A97D4" }
});