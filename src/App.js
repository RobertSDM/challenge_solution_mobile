import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Configuration from "./screens/Configuration";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import CompanyProfile from "./screens/CompanyProfile";
import InfinityTimeline from "./screens/InfinityTimeline";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="InfinityTimeline"
                    component={InfinityTimeline}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="CompanyProfile"
                    component={CompanyProfile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Screen
                    name="Configuration"
                    component={Configuration}
                    options={{
                        headerShown: false,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
