import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bgView: {
    height: 130,
    backgroundColor: "#1A97D4"
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
  routes: {
    color: '#FFF', 
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  flexC: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    gap: 10
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
    paddingBottom: 10,
    paddingTop: 35,
    padding: 20
  },
  travel: {
    color: '#031017', 
    // textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  borderLine: {
    borderBottomColor: "#E1EDF2", borderBottomWidth: 1, marginTop: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6F2F7',
  },
  inputs: {
    height: 45,
  },
  label: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
    // padding: 7,
  },
  inputsCountry: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
    // padding: 7,
  },
  inputFlexD: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25
  },
  innerinputFlexD: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "48%"
  },
  dropdownPlaceholderStyle: {
    fontSize: 14,
    fontWeight: 400,
    width: '100%',
  },
  dropDownContainerStyle: {
    // color: '#fff',
    // paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E1EDF2',
  },
  dropdownStyle: {
    // minHeight: 36,
    backgroundColor: "#fff",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: 400,
    color: "#000",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    // padding: 10,
    // paddingHorizontal: 25
  },
  listItemContainerStyle: {
    borderColor: '#E1EDF2',
    borderBottomWidth: 1,
  },
  buttonTrip: {
    // borderRadius: 30,
    // borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    width: "100%"
    // padding: 10,
    // paddingHorizontal: 25,

  },
  flexInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // marginTop: 20
  },

  bookingText: {
    color: '#A1ADB2',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
  },
  passportDetail: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
  },
  passportDetailDec: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
  },
  passportView: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginTop: 15
  },

  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "40%",
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
  ftContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    borderRadius: 40,
    backgroundColor: 'transparent',
  },

  loginButton: {
    borderRadius: 40,
    backgroundColor: '#1A97D4', 
    shadowColor: 'rgba(26, 151, 212, 0.20)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 5,
    padding: 16,
  },
  loginText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  btnGroup: {
    flexDirection: "row",
    marginHorizontal: 30
  },
  countryView: { flexDirection: "row", alignItems: "center", gap: 20 },
  countryStyle: {
    width: '80%',
    height: 60,
    padding: 10,
  },
  iconImageval: { marginTop: 35 },
  scrollViewCont: { paddingBottom: 30 },
  extLogin: { backgroundColor: "transparent", borderWidth: 1, borderColor: "#1A97D4" }
});