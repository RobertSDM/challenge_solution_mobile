import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({text, style}) => {
  return (
    <View style={style}>
      <Text>{text}</Text>
      <TextInput placeholder={text} className="border px-4 py-2 rounded-md"/>
    </View>
  )
}

export default CustomInput