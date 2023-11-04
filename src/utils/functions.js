import {Dimensions, Platform, PixelRatio, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
export const normalize = size => (shortDimension / guidelineBaseWidth) * size;
export const wp = p => width * (p / 100);
export const hp = p => height * (p / 100);
export const expressions = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
