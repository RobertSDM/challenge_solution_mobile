import { useState } from "react";

let authenticated = false;

const useLogged = () => {
    const [isLogged, setIsLogged] = useState(authenticated);

    const changeAuthenticatedStatus = () => {
        authenticated = !isLogged;
        setIsLogged(authenticated);
    };

    return [isLogged, changeAuthenticatedStatus];
};

export default useLogged;
