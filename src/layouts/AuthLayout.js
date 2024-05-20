import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Resgister";
import PassForgot from "../screens/PassForgot";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthLayout = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="PassForgot" component={PassForgot} />
        </Navigator>
    );
};

export default AuthLayout;
