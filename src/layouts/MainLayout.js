import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompanyProfile from "../screens/CompanyProfile";
import InfinityTimeline from "../screens/InfinityTimeline";
import NavBar from "../../components/NavBar";
import Configuration from "../screens/Configuration";

const { Navigator, Screen } = createNativeStackNavigator();

const MainLayout = () => {
    return (
        <>
            <Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen
                    name="CompanyProfile"
                    component={CompanyProfile}
                />
                <Screen
                    name="InfinityTimeline"
                    component={InfinityTimeline}
                />
                <Screen
                    name="Configuration"
                    component={Configuration}
                />
            </Navigator>
            <NavBar />
        </>
    );
};

export default MainLayout;
