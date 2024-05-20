import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainLayout from "../layouts/MainLayout";
import { AntDesign, Entypo } from "@expo/vector-icons";
import useLogged from "../control/hooks/isLogged";

const InfinityTimeline = ({ navigation }) => {
    const [loggedStatus, setLoggedStatus] = useLogged();

    useEffect(() => {
        if (!loggedStatus) {
            navigation.navigate("Login");
            return;
        }
    }, []);

    return (
        <MainLayout navigation={navigation}>
            <SafeAreaView className="p-4 border-red-500 flex-grow flex">
                <Image
                    className="-z-10 absolute -translate-x-36"
                    source={require("../../assets/image-infinity-timeline.png")}
                />
                <View className="relative flex-grow">
                    <View className="bg-purple-400 p-2 absolute rounded-full">
                        <AntDesign name="home" size={24} color="white" />
                    </View>
                    <View className="absolute right-0 top-1/2 flex items-center gap-y-10">
                        <View>
                            <Image
                                source={require("../../assets/profile-ad.png")}
                            />
                        </View>
                        <View className="relative flex items-center bg-purple-400 p-3 rounded-full">
                            <Entypo
                                name="shopping-cart"
                                size={32}
                                color="white"
                            />
                            <View className="absolute -bottom-1/3 bg-red-500 rounded-full p-1">
                                <AntDesign
                                    name="plus"
                                    size={20}
                                    color="white"
                                />
                            </View>
                        </View>
                        <AntDesign name="heart" size={40} color="white" />
                    </View>
                </View>
            </SafeAreaView>
        </MainLayout>
    );
};

export default InfinityTimeline;
