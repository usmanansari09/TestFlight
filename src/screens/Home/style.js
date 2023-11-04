import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
  innerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headers: { flexDirection: "row", gap: 1, alignItems: "center", marginTop: -20 },
  headerName: { flexDirection: "row", gap: 5, alignItems: "center" },
  mainView: { flexDirection: "column", gap: 2 },
  welcomeText: {
    color: '#5C6366',
    // textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  imgCont: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  destinationText: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    marginTop: 35,
    marginLeft: 25
  },
  iconImg: { marginTop: 35 },
  nameText: {
    color: '#031017',
    // textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600', // You can use '500' for medium
    // lineHeight: 16.8,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },

  passengerPicker: {
    marginBottom: 10,
  },

  imageData: {
    height: 188,
    width: "100%",
    marginTop:-10,
    zIndex:-100
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    top: -45,
    zIndex: -1,
    padding: 3,
    alignItems: "center",
    gap: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 5,

  },
  tab: {
    padding: 10,
  },
  activeTab: {
    backgroundColor: 'lightblue',
  },
  tabText: {
    fontSize: 18,
  },
  tabContent: {
    padding: 20,
  },
  cardCont: {
    alignItems: "center",
    gap: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 5,
    padding: 20
  },


  containersBtn: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  containersBtnTrip: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    position: "absolute",
    right: 0
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    alignSelf: "center",
    flexDirection: "row",
    gap: 2,

  },
  buttonTrip: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    padding: 15,
    paddingLeft: 15,
    paddingRight: 17,
    paddingHorizontal: 15,
    width:"39%"

  },
  buttonTrips: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    padding: 10,
    paddingHorizontal: 15,

    // width: "20%"
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#1A97D4',
    left:-3
  },



  buttonInner: {
    width: 150,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#5C6366',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500', // You can use '500' for medium
    lineHeight: 16.8,
  },
  activeButtonInner: {
    borderRadius: 30,
    backgroundColor: '#1A97D4',
    shadowColor: 'rgba(26, 151, 212, 0.20)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  activeButtonInner2: {
    borderRadius: 30,
    shadowColor: 'rgba(26, 151, 212, 0.20)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    marginLeft: 17,
    // position: "absolute",
    // left: 10,
    width: "100%",

  },
  buttonTextInner: {
    color: '#FFF',
    textAlign: 'center',
    alignSelf: "center",
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16.8,
  },




  dropdownPlaceholderStyle: {
    fontSize: 12,
    fontWeight: 400,
    // width: '33%',
  },
  dropDownContainerStyle: {
    color: '#fff',
    // paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    width: "33%"

  },
  dropdownStyle: {
    // minHeight: 36,
    // backgroundColor: "#fff",
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
  HeadingText:{
    fontSize: 14,
    fontWeight: 400,
    color: "#000",
  },
  listItemContainerStyle: {
    borderColor: '#E1EDF2',
    borderBottomWidth: 1,
  },



  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    // width: "100%",
    marginBottom: 10,
    paddingHorizontal: 25,
    marginTop: 25,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },

  countryView: {
    // paddingHorizontal:20,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderBottomColor: '#E1EDF2',
    width: "84%",
    marginTop:10,
    alignSelf:"center"
  },
  flexInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20
  },
  mLabel: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    top: 8
  },

  depView: {
    // paddingHorizontal:20
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: '#E1EDF2',
    width: "84%",
    // marginLeft: 25,
    marginTop:6,
    alignSelf:"center",
    // paddingHorizontal:32


  },
  paddHoriz: {
    paddingHorizontal:10
  },
  flexInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20
  },

  touchable: {

    backgroundColor: 'transparent',
  },
  datePicker: {

    backgroundColor: 'white',
  },
  flightName: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  innerCont: { zIndex: 1000, position: "relative", marginTop: -20 },
  mainCard: {
    paddingLeft: 10,
    paddingRight:10
  },
  cardStyle1: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    backgroundColor: '#FFF',
    paddingBottom: 20,
    marginTop: 20,

  },
  offerImg: { resizeMode: "stretch", width: "100%" },
  Viewmain: {
    flexDirection: "column",
    gap: 4,
    padding: 15
    // alignItems:"center"
  },
  mainHeading: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  mainDesc: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  borderLine: {
    borderBottomColor: "#E1EDF2", borderBottomWidth: 1, marginHorizontal: 20, marginTop: 10,
  },
  mainFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20
  },
  codeText: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  x7CodeView: {
    backgroundColor: "#F2FBFF",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  x7CodeText: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  shareView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  shareText: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  bookView: {
    backgroundColor: "#1A97D4",
    borderRadius: 20,
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bookText: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  ViewAllOffer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 20
  },
  offerText: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  ViewText: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  pointText: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  viewIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 46,
    backgroundColor: 'rgba(3, 16, 23, 0.30)',
    shadowColor: 'rgba(255, 255, 255, 0.15)',
    shadowOffset: {
      width: 7,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    padding: 5,
    paddingLeft: 13,
    paddingRight: 13

  },
  mainViewIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    marginTop: 18
  },
  footerView: {
    position: "absolute",
    bottom: 45,
    left: 50,
    flexDirection: "column",
  },
  ItemName: {
    color: '#FFFEFE',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  amount: {
    color: '#FFFEFE',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  lamount: {
    color: '#FFFEFE',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  amount2: {
    color: '#FFFEFE',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  placesImg: {
    width: 215,
    height: 250,
    marginTop: 20,
    marginHorizontal: -35,
   
  },
  maincard2: { paddingLeft: 24, paddingRight: 2, paddingRight:15 },
  amountView: {
    position: "absolute",
    bottom: 45,
    left: 50,
    flexDirection: "column",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#F2FBFF',
    backgroundColor: 'rgba(3, 16, 23, 0.20)',
    shadowColor: 'rgba(255, 255, 255, 0.15)',
    shadowOffset: {
      width: 7,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    padding: 7

  },
  ftView: {
    flexDirection: "column",
    paddingHorizontal: 10,
    gap: 8,
    top: -15
  },
  nameHotel: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  locText: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  btmtext: {
    color: '#5C6366',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  viewbtm: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  ViewMore: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    marginTop: 20
  },
  viewMoreText: {
    color: '#1A97D4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  inputFlexD: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 25
  },
  innerinputFlexD: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "48%"
  },
  inputContainers: {
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6F2F7',
  },
  inputss: {
    height: 45,
  },
  labels: {
    color: '#031017',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'capitalize',
    alignSelf: "flex-start",
    // padding: 7,
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    width: "90%",
    borderRadius: 30,
    backgroundColor: 'transparent',
    paddingHorizontal: 20
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  mainVew: { flexDirection: "row", alignItems: "center", justifyContent: "center"},
  innerView: { width: "100%", justifyContent: "center" }
});