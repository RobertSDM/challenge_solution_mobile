import { ToastAndroid } from "react-native"

export default createNotification = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.TOP)
}