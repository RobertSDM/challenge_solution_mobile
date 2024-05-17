import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../layouts/AuthLayout";

const Register = ({ navigation }) => {
    return (
        <AuthLayout>
            <SafeAreaView className="pt-4 flex items-center w-full h-full">
                <View className="space-y-6 flex  justify-center items-center bg-white rounded-tr-[35px] p-4 w-full h-full pt-16">
                    <View className="space-y-6 w-4/5 ">
                        <CustomInput text={"Login"} />
                        <CustomInput text={"Senha"} typePassword={true} />
                        <CustomInput
                            text={"Confirmar senha"}
                            typePassword={true}
                        />
                        <View className="flex items-center flex-row justify-between"></View>
                    </View>
                    <View className="flex items-center gap-y-4">
                        <CustomButton
                            text="Registrar"
                            containerClassName={"px-20"}
                            textClassName={"text-lg"}
                        />
                        <View>
                            <Text>Já tem cadastro?</Text>
                            <Text
                                className="text-blue-500"
                                onPress={() => navigation.navigate("Login")}
                            >
                                Faça login
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </AuthLayout>
    );
};

export default Register;
