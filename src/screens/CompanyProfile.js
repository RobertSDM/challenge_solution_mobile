import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Image, Text, View } from "react-native";

const CompanyProfile = () => {
    return (
        <SafeAreaView className="flex-grow">
            <View className="bg-purple-500 h-20 flex items-center rounded-b-3xl">
                <View className="border-4 border-white relative rounded-full w-24 h-24 -bottom-8 flex justify-center items-center bg-purple-400">
                    <Image
                        source={require("../../assets/icon-company-profile.png")}
                    />
                </View>
                <Text className="m-auto relative top-14 text-lg">
                    [Company Name]
                </Text>
            </View>
            <View className="px-4">
                <View className="flex flex-row gap-x-4 h-36 mt-32 ">
                    <View className="flex-grow flex gap-y-4">
                        <View className="w-full flex-grow bg-purple-200" />
                        <View className="w-full flex-grow bg-purple-400" />
                        <View className="w-full flex-grow bg-purple-300" />
                    </View>
                    <View className="flex-grow">
                        <View className="w-full h-full bg-purple-400" />
                    </View>
                </View>
                <View className="flex flex-row gap-x-4 h-40 mt-14">
                    <View className="flex-grow flex gap-y-4">
                        <View className="w-full flex-grow-[4] bg-purple-400" />
                        <View className="w-full flex-grow bg-purple-200" />
                    </View>
                    <View className="flex-grow flex gap-y-4">
                        <View className="w-full flex-grow-[4] bg-purple-400" />
                        <View className="w-full flex-grow bg-purple-200" />
                    </View>
                </View>
                <View className="flex gap-x-4 mt-16 flex-row items-center">
                    <View className="bg-purple-400 w-16 h-16 rounded-full" />
                    <View className="bg-purple-200 flex-grow w-16 h-8 " />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CompanyProfile;
