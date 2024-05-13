import { View, Text } from "react-native";
import React from "react";

const MainLayout = ({ children, color = "bg-white" }) => {
    return (
        <View>
            <View className={`${color} w-[100%] absolute z-10 h-8`}></View>
            {children}
        </View>
    );
};

export default MainLayout;
