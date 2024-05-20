import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Option, OptionWithSwitch } from "../../components/Options";
import { loggedContext } from "../control/hooks/useLogContext";
import { useNavigation } from "@react-navigation/native";

const Configuration = () => {
    const { logOut } = useContext(loggedContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView className="px-4 pb-10 flex-grow">
            <Text className="text-2xl mb-10">Configuração</Text>
            <View className="flex flex-1 flex-col justify-between">
                <View className="space-y-2">
                    <OptionWithSwitch
                        text="Notificações"
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text="Alterar icones da barra de navegação"
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text="Alterar cor do app"
                        navigation={navigation}
                        action="Configuration"
                    />
                    <Option
                        text="Configurações de privacidade"
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
                    <Option
                        text="sair"
                        containerClassName={"bg-red-500"}
                        textClassName={"text-white"}
                        onTouchStart={() => {
                            logOut();
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Configuration;
