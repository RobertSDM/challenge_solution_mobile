import { api } from "../utils";

export default createUser = async (user) => {
    try {
        const res = await api.post("auth/register", user);

        if (res.status === 200) {
            return res.data;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
};
