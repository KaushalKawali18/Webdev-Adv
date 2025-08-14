import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function NoteInput({ onAddNote }) {
  const [text, setText] = useState('');

  const handlePress = () => {
    onAddNote(text);
    setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write a note..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 8,
  },
});
