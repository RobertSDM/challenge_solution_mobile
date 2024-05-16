import { View } from "react-native";
import React from "react";
import NavBar from "../../components/NavBar";

const MainLayout = ({ children, navigation, color = "bg-white" }) => {
    return (
        <View className={`border h-full flex justify-between`}>
            <View className={`${color} w-[100%] absolute z-10 h-8`} />
            {children}
            <NavBar navigation={navigation}/>
        </View>
    );
};

export default MainLayout;
