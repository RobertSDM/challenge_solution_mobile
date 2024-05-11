import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Configuration from "./screens/Configuration";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Navigator>
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
