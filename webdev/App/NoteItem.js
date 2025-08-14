import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function NoteItem({ text, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: { flex: 1 },
});