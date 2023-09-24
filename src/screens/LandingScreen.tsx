import React, {useState} from 'react';
import * as colors from '../global/colors';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {InputPhone} from "../subcomponents/phoneInput";
import {TextDivider} from "../subcomponents/TextDivider";
import {StackProps} from "../interfaces";

export const LandingScreen = ({ navigation }: StackProps) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberWithoutCode, setPhoneNumberWithoutCode] = useState('');
    return (
        <KeyboardAvoidingView
            behavior={'padding'}
            style={styles.main}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={{marginHorizontal: 20, marginTop: 50}}>

                        {/*Login with number*/}
                        <View>
                            <Text style={styles.text}>Enter your mobile number</Text>
                            <InputPhone
                                sendCode={{
                                    sendCode: true,
                                    onPress: () => {
                                    },
                                }}
                                defaultCode={'MX'}
                                defaultValue={phoneNumber}
                                onChangeFormattedText={(text: string) =>
                                    setPhoneNumber(text)
                                }
                                onChangeText={(number: string) =>
                                    setPhoneNumberWithoutCode(number)
                                }
                            />

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('LoginScreen')}>
                                <View style={styles.button}>
                                    <Text style={styles.textButton}>Next</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.description}>
                                By proceeding, you consent to get calls, Whatsapp or SMS messages, including by
                                automated means, from uber and its affiliates to the number provided.
                            </Text>
                        </View>

                        {/*Divider*/}

                        <View style={{height: '10%'}}/>
                        <TextDivider text={'or'}/>

                        {/*Login with Social Media */}
                        <View>
                            <TouchableWithoutFeedback>
                                <View style={styles.googleButton}>
                                    <Image source={require('../assets/images/google.png')}
                                        style={{ position: 'absolute', zIndex: 1000, marginLeft: 20}}
                                    />
                                    <Text style={styles.googleText}>Continue with google</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    text: {
        marginVertical: 20,
        fontSize: 24,
        fontWeight: '500',
    },
    textButton: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        justifyContent: 'center',
        width: '100%',
        height: 55,
        backgroundColor: colors.black,
    },
    description: {
        marginTop: 10,
        color: '#888888',
        fontSize: 11,
    },
    googleButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 2,
        height: 55,
        alignItems: 'center',
        marginTop: 30,
    },
    googleText: {
        flex: 1,
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
