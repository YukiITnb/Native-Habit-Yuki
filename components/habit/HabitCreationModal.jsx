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
} from 'react-native';

import styles from './HabitCreationModal.style';

const HabitCreationModal = ({ isVisible, onClose, onSave }) => {
  const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const selectIcon = () => {
    // Implement icon selection logic here, you can use a library like react-native-image-picker or your custom logic.
  };

  const saveHabit = () => {
    onSave({
      habitName,
      description,
      selectedIcon,
    });
    setHabitName('');
    setDescription('');
    setSelectedIcon(null);
    onClose();
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
          <TouchableOpacity onPress={selectIcon} style={styles.iconButton}>
            {selectedIcon ? (
              <Image source={selectedIcon} style={styles.selectedIcon} />
            ) : (
              <Text>Select Icon</Text>
            )}
          </TouchableOpacity>
          <Button title="Save" onPress={saveHabit} />
        </View>
      </View>
    </Modal>
  );
};

export default HabitCreationModal