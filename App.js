import { NavigationContainer } from "@react-navigation/native";
import MainLayout from "./src/layouts/MainLayout";
import { LogProvider, loggedContext } from "./src/control/hooks/useLogContext";
import AuthLayout from "./src/layouts/AuthLayout";
import { useContext } from "react";

const App = () => {

    return (
        <LogProvider>
            <AppContent />
        </LogProvider>
    );
};

const AppContent = () => {
    const {isLogged} = useContext(loggedContext);

    return (
        <NavigationContainer>
            {isLogged ? <MainLayout /> : <AuthLayout />}
        </NavigationContainer>
    );
};

export default App;
