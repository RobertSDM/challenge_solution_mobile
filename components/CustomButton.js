import { View, Text } from "react-native";
import React from "react";

const CustomButton = ({
    style,
    text,
    containerClassName,
    textClassName,
    onTouchStart,
}) => {
    return (
        <View
            onTouchStart={onTouchStart}
            style={style}
            className={`px-4 py-2 rounded-md bg-blue-500 active:scale-95  ${containerClassName}`}
        >
            <Text className={`text-white ${textClassName}`}>{text}</Text>
        </View>
    );
};

export default CustomButton;
