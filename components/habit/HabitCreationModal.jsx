import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';

import styles from './HabitCreationModal.style';
import { icons } from '../../constants';

// const iconlist = [
//   {
//     id: 1,
//     name: 'heart',
//     url: icons.heart
//   },
//   {
//     id: 2,
//     name: 'share',
//     url: icons.share
//   },
//   {
//     id: 3,
//     name: 'check',
//     url: icons.checkmark
//   }
// ]

const HabitCreationModal = ({ isVisible, onClose, db }) => {
  const isComplete = false
  const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const [icons1, setIcons] = useState([
    {
      id: 1,
      name: 'heart',
      uri: icons.heart,
    },
    // Add more icons here
  ]);

  const selectIcon = (icon) => {
    setSelectedIcon(icon.uri);
  };

  const insertHabit = (iconSource, habitName, description, isComplete) =>{
    db.transaction(tx => {
      tx.executeSql('INSERT INTO habits (iconSource, habitName, description, isComplete) VALUES (?, ?, ?, ?)', [iconSource, habitName, description, isComplete],
      );
    });
  }

  const saveHabit = () => {
    insertHabit(icons1.heart, habitName, description, isComplete)
    setHabitName('');
    setDescription('');
    setSelectedIcon(null);
    onClose();
  };

  const renderIconItem = (icon) => {
    return (
      <TouchableOpacity onPress={() => selectIcon(icon)}>
        <Image source={icon.uri} style={styles.iconItem} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="appear"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create a New Habit</Text>
          <TextInput
            placeholder="Habit Name"
            value={habitName}
            onChangeText={(text) => setHabitName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.input}
          />
          <FlatList
            data={icons1}
            renderItem={renderIconItem}
            numColumns={3}
            keyExtractor={(item) => item.id}
          />
          <Button title="Save" onPress={saveHabit} />
        </View>
      </View>
    </Modal>
  );
};

export default HabitCreationModal
