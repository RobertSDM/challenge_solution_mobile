import { View, Text } from "react-native";
import React from "react";

const CustomButton = ({ style, text, containerClassName, textClassName }) => {
    return (
        <View
            style={style}
            className={`px-4 py-2 rounded-md bg-blue-500  ${containerClassName}`}
        >
            <Text className={`text-white ${textClassName}`}>{text}</Text>
        </View>
    );
};

export default CustomButton;
