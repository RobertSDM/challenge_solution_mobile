import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Option, OptionWithSwitch } from "../../components/Options";

const Configuration = ({ navigation }) => {
    return (
        <SafeAreaView className="px-4 pb-10 h-full">
            <Text className="text-2xl mb-10">Configuração</Text>
            <View className="flex flex-1 flex-col justify-between">
                <View className="space-y-2">
                    <OptionWithSwitch
                        text="Notificações"
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text=""
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text=""
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text=""
                        navigation={navigation}
                        action="Configuration"
                    />
                </View>
                <View className="space-y-2">
                    <Option
                        text="Ajuda"
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text="Sobre"
                        navigation={navigation}
                        action="Configuration"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Configuration;