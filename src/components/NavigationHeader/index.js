// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { Pressable, StyleSheet, Text, View, Image, Dimensions, SafeAreaView, Platform } from 'react-native';
// import { Colors, Typography, Mixins } from '../../styles';
// import ArrowLeft from '../../assets/images/ArrowLeft.png';
// import ArrowLeftWhite from '../../assets/images/checkWhite.png';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const { width, height } = Dimensions.get('window');

// const NavigationHeader = ({
//   noShadowToggle = false,
//   allowSkip = false,
//   onSkip,
//   headerText = '',
//   inScreen = false,
//   footer = false,
//   backTo = '',
//   stack = '',
//   marginSpace = 10,
//   hideBackButton = false,
//   isWhite = false,
// }) => {
//   const navigation = useNavigation();
//   const iconLeft = isWhite ? ArrowLeftWhite : ArrowLeft

//   return (
//     <SafeAreaView style={[styles.header, { justifyContent: footer ? 'flex-start' : 'space-between', marginLeft: footer ? 13 : 0 }]}>
//       {!hideBackButton && (
//         <Pressable
//           onPress={() => {
//             backTo && stack ? navigation.navigate(stack, { screen: backTo }) : navigation.goBack();
//           }}>
//           <View style={{ marginLeft: inScreen ? width * 0.1 : width * 0.03 }}>
//             <Icon name="angle-left" size={footer ? 24 : 40} color={footer ? '#000' : '#fff'} />
//           </View>
//         </Pressable>
//       )}

//       <Text
//         style={[
//           hideBackButton && styles.headerTextWithHideBackButton,
//           {
//             color: "#fff",
//             fontSize: footer ? Typography.FONT_SIZE_16 : Typography.FONT_SIZE_24,
//             fontWeight: footer ? Typography.FONT_WEIGHT_BOLD : Typography.FONT_WEIGHT_500,
//             fontStyle: "normal",
//             fontFamily: Typography.FONT_FAMILY_MEDIUM,
//             marginRight: marginSpace ? marginSpace : 70,
//             marginLeft: footer ? 15 : 0
//           },
//         ]}>
//         {headerText}
//       </Text>
//       <Pressable onPress={onSkip} style={{ marginRight: width * 0.03 }}>
//         <View>
//           <Text style={styles.skipText}>{allowSkip ? 'SKIP' : ''}</Text>
//         </View>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: Platform.OS === 'ios' ? 50 : 15,
//     zIndex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//   },
//   iconCard: {
//     width: 48,
//     height: 48,
//   },
//   skipText: {
//     fontSize: Typography.FONT_SIZE_14,
//     fontWeight: Typography.FONT_WEIGHT_500,
//     fontFamily: Typography.FONT_FAMILY_Montserrat-Regular_REGULAR,
//   },
//   headerTextWithHideBackButton: {
//     flex: 1,
//     alignSelf: 'center',
//     textAlign: 'center',

//   },
// });
// export default NavigationHeader;
