import { View } from "react-native";
import React from "react";
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome6,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
    const navigation = useNavigation();

    return (
        <View className="bg-purple-500 flex flex-row items-center py-3 justify-around fixed z-10">
            <View
                className="flex items-center justify-center bg-purple-200 p-3 rounded-full active:scale-95"
                onTouchStart={() => {
                    navigation.navigate("CompanyProfile");
                }}
            >
                <MaterialCommunityIcons
                    name="account"
                    size={24}
                    color="black"
                />
            </View>
            <View
                className="flex items-center justify-center bg-purple-200 p-3 rounded-full"
                onTouchStart={() => {
                    navigation.navigate("InfinityTimeline");
                }}
            >
                <Ionicons name="play" size={24} color="black" />
            </View>
            <View
                className="flex items-center justify-center bg-purple-200 p-3 rounded-full"
                onTouchStart={() => {
                    navigation.navigate("Configuration");
                }}
            >
                <FontAwesome6 name="gear" size={24} color="black" />
            </View>
        </View>
    );
};

export default NavBar;
