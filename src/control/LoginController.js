import loginUser from "../connection/loginCon";
import showNotification from "./hooks/showNotification";

const loginControllerCon = (login, pass, changeAuthenticatedStatus) => {
    if (login === "" || pass === "") {
        showNotification("login ou senha não podem ser vazios");
        return;
    }

    loginUser({ login, senha: pass }).then((res) => {
        if (res) {
            changeAuthenticatedStatus();
        } else {
            showNotification("usuario ou senha errados");
        }
    });
};

export default loginControllerCon;
