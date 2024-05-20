import { ToastAndroid } from "react-native";

export default createNotification = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        30
    );
};
