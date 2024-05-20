import { NavigationContainer } from "@react-navigation/native";
import MainLayout from "./layouts/MainLayout";
import { LogProvider, loggedContext } from "./control/hooks/useLogContext";
import AuthLayout from "./layouts/AuthLayout";
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
