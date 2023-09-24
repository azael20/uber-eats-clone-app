import React, {useState} from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {InputPhone} from "../subcomponents/phoneInput";
import {TextDivider} from "../subcomponents/TextDivider";
import * as colors from "../global/colors";
import {ArrowLeftIcon, ArrowRightIcon, EyeIcon, EyeSlashIcon} from "react-native-heroicons/mini";
import {StackProps} from "../interfaces";
import {uberIcons, uberImages} from "../constants";

export const LoginScreen = ({navigation}: StackProps) => {
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [password, setPassword] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
            behavior={'padding'}
            style={styles.main}>
                <View style={styles.container}>
                    <View style={{marginHorizontal: 20, marginTop: 50}}>
                        <View>
                            <Text style={styles.text}>Welcome back, Azael</Text>
                            <View style={styles.inputSection}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Please enter your password'}
                                    placeholderTextColor={'#7f7f7f'}
                                    secureTextEntry={passwordHidden}
                                    onSubmitEditing={() => navigation.navigate('HomeScreen')}
                                    onChangeText={(value) => setPassword(value)}
                                />
                                <TouchableWithoutFeedback onPress={() => setPasswordHidden(!passwordHidden)}>
                                    <View style={styles.hidePasswordButton}>
                                        {passwordHidden ?
                                            <EyeIcon color={'black'} size={20}/> :
                                            <EyeSlashIcon color={'black'} size={20}/>
                                        }
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <TouchableWithoutFeedback>
                            <View style={[styles.forgotButton, {marginTop: 15}]}>
                                <Text style={styles.textButton}>I forgot my password</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <View style={styles.forgotButton}>
                                <Text style={styles.textButton}>I can't sign in</Text>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                </View>
            <View style={styles.footer}>
                <TouchableWithoutFeedback onPress={() => navigation.pop()}>
                    <View style={styles.leftButton}>
                        <Image source={uberIcons['arrow-left']}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback disabled={password.length < 7}
                                          onPress={() => navigation.navigate('HomeScreen')}>
                    <View
                        style={[styles.rightButton, {backgroundColor: password.length < 7 ? '#f6f6f6' : '#EEEEEE'}]}>
                        <Text
                            style={[password.length < 7 ? {color: '#7f7f7f'} : {color: colors.black}, {
                                fontWeight: '500',
                                fontSize: 16
                            }]}
                        >Next</Text>
                        <View style={{width: 10}}/>
                        <Image source={uberIcons['arrow-right']} width={10} style={{width: 16, height: 16}}
                               resizeMode={'contain'}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        position: 'absolute',
        paddingVertical: 10,
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        marginVertical: 20,
        fontSize: 24,
        fontWeight: '500',
    },
    input: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        height: 50,
        paddingHorizontal: 20,
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hidePasswordButton: {
        backgroundColor: '#EEEEEE',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
        zIndex: 1000
    },
    forgotButton: {
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#EEEEEE',
        borderRadius: 50,
        alignSelf: 'flex-start'
    },
    textButton: {
        color: '#333333',
        textAlign: 'center',
        fontWeight: '500',
    },
    bottomButtonsContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    leftButton: {
        flexDirection: 'row',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 50,
    },
    rightButton: {
        flexDirection: 'row',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderRadius: 50,
    },
});
