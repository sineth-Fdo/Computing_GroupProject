import { TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import React from 'react';

const KeyBoardAvoiding = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyBoardAvoiding;
