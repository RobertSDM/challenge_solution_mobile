import forgotPasswordCon from "../connection/forgotPasswordCon";
import showNotification from "./hooks/showNotification";

const passForgotControllerCon = (
    login,
    newPass,
    confirmNewPass,
    navigation
) => {
    if (newPass !== confirmNewPass) {
        showNotification("senhas não são iguais");
        return;
    } else if (newPass === "" || confirmNewPass === "" || login === "") {
        showNotification("login ou senhas não podem ser vazias");
        return;
    }

    forgotPasswordCon(newPass, login).then((res) => {
        if (res) {
            showNotification("senha alterada com sucesso");
            navigation.navigate("Login");
        } else {
            showNotification("login errado");
        }
    });
};

export default passForgotControllerCon;
