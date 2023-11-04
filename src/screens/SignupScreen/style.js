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

  card: {
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.07,
    shadowRadius: 35,
    borderRadius: 20,
    marginHorizontal: 20,
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
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "45%",
    borderRadius: 30,
    backgroundColor: 'transparent',
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

  loginButton: {
    borderRadius: 30,
    backgroundColor: '#1A97D4', 
    shadowColor: 'rgba(26, 151, 212, 0.20)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 5, 
    padding: 12,
  },
  loginText: {
    color: '#FFF', 
    textAlign: 'center',
    alignSelf:"center",
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
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
  flexD: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    gap: 16,
    marginLeft:10,
    marginTop: 15
  },
  usericon: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 10
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
    fontSize: 12,
    fontWeight: 'Montserrat-Regular',
    fontStyle: "normal",
    fontFamily: "500",
    marginLeft: 10
  },
  checkView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    alignItems:"center",
    gap:20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 5,
    padding: 20
  },
  otpText: {
    color: '#5C6366', 
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500', 
    // lineHeight: 'normal', 
    textTransform: 'capitalize',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:13,
    // marginVertical: 10,
  },
  otpInput: {
    width: 40,
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E1EDF2',

    color: '#5C6366', 
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  enterOtpText: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  crAcc: {
    color: '#1A97D4',
    top: 3,
    fontWeight: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600"
  },
  centerIndicator: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    height: "100%"
  },
});