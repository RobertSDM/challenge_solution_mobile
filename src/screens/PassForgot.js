import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../layouts/AuthLayout";
import useLogged from "../control/hooks/isLogged";
import loginUser from "../connection/login";
import showNotification from "../control/hooks/showNotification";
import forgotPassword from "../connection/forgotPassword";

const PassForgot = ({ navigation }) => {
    const [login, setLogin] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");
    const [loggedStatus, changeLoggedStatus] = useLogged();

    useEffect(() => {
        if (loggedStatus) {
            navigation.navigate("CompanyProfile");
            return;
        }
    }, [loggedStatus]);

    return (
        <AuthLayout>
            <SafeAreaView className="pt-4 flex items-center w-full h-full">
                <View className="bg-purple-700 pt-16 absolute h-[40%] w-full flex items-center"></View>
                <View className="space-y-10 bg-purple-200 rounded-tr-2xl pt-4 w-full mt-[30%]">
                    <View className="space-y-10 flex items-center  bg-white rounded-tr-[35px] p-4 w-full h-full pt-16">
                        <Text className="text-xl font-semibold">
                            Esqueceu a senha
                        </Text>
                        <View className="space-y-6 w-4/5 ">
                            <CustomInput
                                text={"Login"}
                                value={login}
                                setValue={setLogin}
                            />
                            <CustomInput
                                text={"Nova senha"}
                                typePassword={true}
                                value={newPass}
                                setValue={setNewPass}
                            />
                            <CustomInput
                                text={"Cofirmar nova senha"}
                                typePassword={true}
                                value={confirmNewPass}
                                setValue={setConfirmNewPass}
                            />
                        </View>
                        <View className="flex items-center gap-y-4">
                            <CustomButton
                                text="Alterar"
                                containerClassName={"px-20"}
                                textClassName={"text-lg"}
                                onTouchStart={() => {
                                    if (newPass !== confirmNewPass) {
                                        showNotification(
                                            "senhas não são iguais"
                                        );
                                        return;
                                    } else if (
                                        newPass === "" ||
                                        confirmNewPass === "" ||
                                        login === ""
                                    ) {
                                        showNotification(
                                            "login ou senhas não podem ser vazias"
                                        );
                                        return;
                                    }

                                    forgotPassword(newPass, login).then(
                                        (res) => {
                                            if (res) {
                                                showNotification(
                                                    "senha alterada com sucesso"
                                                );
                                                navigation.navigate("Login");
                                            } else {
                                                showNotification(
                                                    "login errado"
                                                );
                                            }
                                        }
                                    );
                                }}
                            />
                            <View>
                                <Text>
                                    Voltar ao{" "}
                                    <Text
                                        className="text-blue-500"
                                        onPress={() =>
                                            navigation.navigate("Login")
                                        }
                                    >
                                        login
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </AuthLayout>
    );
};

export default PassForgot;
