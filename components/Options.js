import { View, Text, Switch } from "react-native";
import React, { useState } from "react";

const Option = ({
    text,
    navigation,
    action,
    style,
    onTouchStart,
    containerClassName,
    textClassName,
}) => {
    return (
        <View
            className={`bg-slate-300 py-2 rounded-md ${containerClassName}`}
            style={style}
        >
            <Text
                className={`flex px-4 py-2 ${textClassName}`}
                onPress={
                    !onTouchStart
                        ? () => {
                              navigation.navigate(action);
                          }
                        : onTouchStart
                }
            >
                {text}
            </Text>
        </View>
    );
};

const OptionWithSwitch = ({
    text,
    action,
    params,
    navigation,
    style,
    defaultEnabled = false,
}) => {
    const [enabled, setEnabled] = useState(defaultEnabled);

    return (
        <View
            className="flex w-full flex-row bg-slate-300 px-4 py-2 justify-between items-center rounded-md"
            style={style}
            onTouchStart={() => {
                navigation.navigate(action, {
                    ...params,
                });
            }}
        >
            <Text>{text}</Text>
            <Switch
                onValueChange={() => setEnabled((prev) => !prev)}
                value={enabled}
            />
        </View>
    );
};

export { Option, OptionWithSwitch };
