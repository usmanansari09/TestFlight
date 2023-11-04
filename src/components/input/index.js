import React, { useState } from "react"
import { Dimensions, TextInput, View, Text } from "react-native"

const width = Dimensions.get("window").width

const Input = props => {
  const {
    iconLeft = null,
    iconRight = null,
    error = "",
    iconHighlighted = null,
  } = props
  const large = !props.width ? width / 1.1 : props.width
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height,
          width: large,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: '#E6F2F7',
        }}
      >
        {!isFocused && iconLeft && (
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {iconLeft}
          </View>
        )}

        {isFocused && iconHighlighted && (
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {iconHighlighted}
          </View>
        )}

        <TextInput
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          underlineColorAndroid="transparent"
          style={{
            color: "#fff",
            paddingLeft: iconLeft ? 0 : 22,
            flex: iconLeft ? (iconRight ? 0.6 : 0.8) : 1,
            height: "100%",
            textAlignVertical: "top",
            paddingBottom: 0,
            color: '#A1ADB2',
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '400',
          }}
        // placeholderTextColor={Colors.WHITE}
        />
        {iconRight && (
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {iconRight}
          </View>
        )}
      </View>
      {!!error && (
        <Text
          style={{
            textAlign: "center",
            color: '#A1ADB2', // Default text color if the variable is not set
            fontFamily: 'Montserrat-Regular',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '400',
          }}
        >
          {error}
        </Text>
      )}
    </>
  )
}

export default Input
