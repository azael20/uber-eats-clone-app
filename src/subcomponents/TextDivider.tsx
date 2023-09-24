import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface TextDividerProps {
    text: string;
}
export const TextDivider: FC<TextDividerProps> = ({ text }) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center', color: '#888888'}}>{text}</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#a4a4a4'}} />
        </View>
    );
};
