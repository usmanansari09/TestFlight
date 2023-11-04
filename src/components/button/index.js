import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Typography, Colors, Mixins } from '../../styles';

const width = Dimensions.get('window').width;

const Button = ({
  disabled = false,
  btnWidth = width / 1.16,
  loading = false,
  shadow = false,
  loadingColor = false,
  children,
  onPress,
  type = 'filled',
  borderType = null,
  bordered = false,
  backgroundColor = Colors.APP_MAIN_2,
  textColor = Colors.APP_MAIN,
  textFontSize = Typography.FONT_SIZE_14,
  textFontWeight = Typography.FONT_WEIGHT_BOLD,
  textStyle = null,
  size = 'large',
  height = 44,
  hasBgChange = false,
  borderColor = Colors.BLACK,
  bgColor = '',
}) => {
  const large = btnWidth;
  const small = width / 2;
  const btnSize = size === 'large' ? large : small;
  const btnBgColor = type === 'filled' ? backgroundColor : 'transparent';
  const btnTextColor = type === 'filled' ? textColor : Colors.BLACK;
  const btnBorderRadius = bordered ? 20 : 7;
  const heightBtn = height;
  // const changeBG = hasBgChange ?? '#A50A0A';

  const containerCommonStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    height: Mixins.scaleHeight(heightBtn),
    backgroundColor: bgColor ? bgColor :  (hasBgChange ? '#A50A0A' : '#780303'),
    width: btnSize,
    marginTop:20,
    borderRadius: btnBorderRadius,
    ...(shadow ? Mixins.boxShadow(Colors.BLACK) : []),
  };

  const textCommonStyle = {
    ...textStyle,
    color: Colors.WHITE,
    fontSize: textFontSize,
    textAlign: 'center',
    fontWeight: textFontWeight,
  };

  const border = borderType === 'outlined' && {
    borderColor: borderColor,
    borderWidth: disabled ? 1 : 1,
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        {loading ? (
          <ActivityIndicator color={loadingColor ? loadingColor : Colors.WHITE} />
        ) : (
          <Text style={[textCommonStyle]}> {children} </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
