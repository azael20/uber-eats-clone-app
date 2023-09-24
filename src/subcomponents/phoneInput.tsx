import React, {useRef} from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {CountryCode} from 'react-native-country-picker-modal';
import * as colors from '../global/colors';

export interface PhoneInputProps {
    defaultCode?: CountryCode;
    defaultValue: string | undefined;
    onChangeFormattedText: (text: string) => void | undefined;
    onChangeText?: (text: string) => void | undefined;
    style?: StyleProp<TextStyle>;
    sendCode?: {
        sendCode: boolean;
        onPress: () => void;
    };
    disabled?: boolean;
}

export const InputPhone = ({
                               defaultCode,
                               defaultValue,
                               onChangeFormattedText,
                               onChangeText,
                               style,
                               sendCode,
                               disabled,
                           }: PhoneInputProps) => {
    return (
        <View
            style={[
                sendCode?.sendCode && {
                    flexDirection: 'row',
                    justifyContent: 'center',
                },
                {
                    width: '100%',
                    alignSelf: 'center',
                    marginBottom: 20,
                    backgroundColor: '#F5F5F5',
                    height: 50,
                },
            ]}>
            <PhoneInput
                textInputProps={{
                    placeholderTextColor: 'grey',
                    keyboardType: 'number-pad',
                }}
                defaultValue={defaultValue}
                defaultCode={defaultCode}
                disabled={disabled}
                disableArrowIcon={disabled}
                layout="first"
                placeholder={'616 123 4567'}
                withShadow={false}
                containerStyle={[styles.phoneInputContainer, style]}
                textInputStyle={[styles.phoneTextInput]}
                textContainerStyle={styles.phoneTextContainer}
                codeTextStyle={{color: 'black', right: 17}}
                countryPickerButtonStyle={{width: 70}}
                onChangeFormattedText={onChangeFormattedText}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    phoneInputContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    phoneTextInput: {
        fontSize: 14,
        backgroundColor: '#F5F5F5',
        color: colors.black,
    },
    phoneTextContainer: {
        color: 'red',
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingVertical: 0,
    },
    sendCodeButton: {
        alignSelf: 'center',
        color: colors.greenText,
        fontWeight: '500',
    },
});
