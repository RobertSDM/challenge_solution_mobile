import { api } from "../utils/index";

export default loginUser = async (user) => {
    try {
        const res = await api.post("/auth/login", user );

        if (res.status === 200) {
            return res.data;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
};
