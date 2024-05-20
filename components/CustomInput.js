import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        right: 10,
        top: "50%",
    },
});

const CustomInput = ({
    text,
    style,
    value,
    setValue,
    typePassword = false,
}) => {
    const [hide, setHide] = useState(!typePassword);

    return (
        <View style={style} className="relative">
            <Text>{text}</Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                secureTextEntry={!hide}
                placeholder={text}
                className="border px-4 py-2 rounded-md"
            />
            {typePassword && (
                <Entypo
                    name={hide ? "eye-with-line" : "eye"}
                    size={24}
                    color="black"
                    style={styles.icon}
                    onPress={() => setHide((prev) => !prev)}
                />
            )}
        </View>
    );
};

export default CustomInput;
