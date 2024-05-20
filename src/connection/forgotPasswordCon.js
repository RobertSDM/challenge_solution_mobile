import { api } from "../utils";

export default forgotPass = async (newPass, login) => {
    try {
        const res = await api.post("auth/pass_forgot", {
            senha: newPass,
            login,
        });

        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
};
