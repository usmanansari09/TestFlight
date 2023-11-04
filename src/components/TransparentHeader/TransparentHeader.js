import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function TransparentHeader({ title = "", isIcon }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainContainer]}>
      {isIcon != false && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" color={Colors.themeGrey} size={20} />
        </TouchableOpacity>
      ) 
      }
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View></View>
    </View>
  );
}

export default TransparentHeader;
