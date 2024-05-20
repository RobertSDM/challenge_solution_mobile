import { createContext, useState } from "react";

export const loggedContext = createContext();

export const LogProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const logOut = () => {
        setIsLogged(false);
    };

    const changeAuthenticatedStatus = () => {
        setIsLogged(true);
    };

    return (
        <loggedContext.Provider
            value={{ isLogged, changeAuthenticatedStatus, logOut }}
        >
            {children}
        </loggedContext.Provider>
    );
};
