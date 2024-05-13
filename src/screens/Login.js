import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../layouts/AuthLayout";

const Login = ({ navigation }) => {
    return (
        <AuthLayout>
            <SafeAreaView className="pt-4 flex items-center w-full h-full">
                <View className="bg-purple-700 pt-16 absolute h-[70%] w-full flex items-center">
                    <Image
                        className="h-52 aspect-square object-scale-down"
                        source={require("../../assets/logo-MAI.png")}
                    />
                </View>
                <View className="space-y-10 bg-purple-200 rounded-tr-2xl pt-4 w-full mt-[60%]">
                    <View className="space-y-10 flex items-center bg-white rounded-tr-[35px] p-4 w-full h-full pt-16">
                        <View className="space-y-6 w-4/5 ">
                            <CustomInput text={"Login"} />
                            <CustomInput text={"Senha"} />
                            <View className="flex items-center flex-row justify-between">
                                <Text>Lembrar de mim</Text>
                                <Text>Esqueceu a senha?</Text>
                            </View>
                        </View>
                        <View className="flex items-center gap-y-4">
                            <CustomButton
                                text="Logar"
                                containerClassName={"px-20"}
                                textClassName={"text-lg"}
                            />
                            <View>
                                <Text>Ainda não está cadastrado?</Text>
                                <Text
                                    className="text-blue-500"
                                    onPress={() => navigation.navigate("Login")}
                                >
                                    Se cadastre
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </AuthLayout>
    );
};

export default Login;
