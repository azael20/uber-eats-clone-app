import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

interface SwitchProps {
  label?: string;
  onPress?: () => void;
  selected: boolean;
}

export const SwitchButton = ({ label, onPress, selected }: SwitchProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className={`self-start px-6 py-2 rounded-full ${selected && 'bg-black'}`}>
        <Text className={`${selected ? 'text-white' : 'text-black font-semibold'}`}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
