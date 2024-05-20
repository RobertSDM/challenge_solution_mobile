import { api } from "../utils";

export default isAuthenticated = async (login) => {
    try{

    const res = await api.get("auth/is_authenticated", {
        login: login,
    });

    if (res.status === 200) {
        return true;
    } else {
        return false;
    }
    }catch(err){
        console.log(err);
    }
};
