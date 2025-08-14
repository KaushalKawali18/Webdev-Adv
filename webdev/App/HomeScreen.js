import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import NoteInput from '../components/NoteInput';
import NoteItem from '../components/NoteItem';
import { loadNotes, saveNotes } from '../Storage/storage';

export default function HomeScreen() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes().then(setNotes);
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (text) => {
    if (text.length > 0) {
      setNotes((prev) => [...prev, { id: Date.now().toString(), text }]);
    }
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter(note => note.id !== id));
  };

  return (
    <View style={styles.container}>
      <NoteInput onAddNote={addNote} />
      {notes.length === 0 ? (
        <Text style={styles.noNotes}>No notes yet</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteItem text={item.text} onDelete={() => deleteNote(item.id)} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  noNotes: { textAlign: 'center', marginTop: 30, color: 'gray' },
});
