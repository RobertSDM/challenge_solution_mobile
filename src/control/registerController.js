import createUser from "../connection/registerCon";
import showNotification from "./hooks/showNotification";

const registerControllerCon = (
    apelido,
    login,
    pass,
    confirmPass,
    changeAuthenticatedStatus
) => {
    if (pass !== confirmPass) {
        showNotification("senhas não são iguais");
        return;
    } else if (pass === "" || confirmPass === "" || login === "") {
        showNotification("login ou senhas não podem ser vazias");
        return;
    }

    createUser({
        login,
        apelido,
        senha: pass,
    }).then((res) => {
        if (res) {
            changeAuthenticatedStatus();
        } else {
            showNotification("problema ao criar usuario");
        }
    });
};

export default registerControllerCon;
