import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthLayout from "../layouts/AuthLayout";
import createUser from "../connection/register";
import showNotification from "../control/hooks/showNotification";
import useLogged from "../control/hooks/isLogged";

const Register = ({ navigation }) => {
    const [apelido, setApelido] = useState("");
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [loggedStatus, changeLoggedStatus] = useLogged();

    useEffect(() => {
        if (loggedStatus) {
            navigation.navigate("Login");
            return;
        }
    }, [loggedStatus]);

    return (
        <AuthLayout>
            <SafeAreaView className="pt-4 flex items-center w-full h-full">
                <View className="bg-purple-700 pt-16 absolute h-[20%] w-full flex items-center"></View>
                <View className="space-y-10 bg-purple-200 rounded-tr-2xl pt-4 w-full mt-[5%]">
                    <View className="space-y-6 flex  items-center bg-white rounded-tr-[35px] p-4 w-full h-full pt-16">
                        <Text className="text-xl font-semibold">
                            Se cadastre
                        </Text>
                        <View className="space-y-6 w-4/5 ">
                            <CustomInput
                                text={"Apelido"}
                                value={apelido}
                                setValue={setApelido}
                            />
                            <CustomInput
                                text={"Login"}
                                value={login}
                                setValue={setLogin}
                            />
                            <CustomInput
                                text={"Senha"}
                                typePassword={true}
                                value={pass}
                                setValue={setPass}
                            />
                            <CustomInput
                                text={"Confirmar senha"}
                                typePassword={true}
                                value={confirmPass}
                                setValue={setConfirmPass}
                            />
                            <View className="flex items-center flex-row justify-between"></View>
                        </View>
                        <View className="flex items-center gap-y-4">
                            <CustomButton
                                text="Registrar"
                                containerClassName={"px-20"}
                                textClassName={"text-lg"}
                                onTouchStart={() => {
                                    if (pass !== confirmPass) {
                                        showNotification(
                                            "senhas não são iguais"
                                        );
                                        return;
                                    } else if (
                                        pass === "" ||
                                        confirmPass === "" ||
                                        login === ""
                                    ) {
                                        showNotification(
                                            "login ou senhas não podem ser vazias"
                                        );
                                        return;
                                    }

                                    createUser({
                                        login,
                                        apelido,
                                        senha: pass,
                                    }).then((res) => {
                                        if (res) {
                                            changeLoggedStatus();
                                        } else {
                                            showNotification(
                                                "problema ao criar usuario"
                                            );
                                        }
                                    });
                                }}
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
                </View>
            </SafeAreaView>
        </AuthLayout>
    );
};

export default Register;
