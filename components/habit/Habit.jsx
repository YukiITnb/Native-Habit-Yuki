import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { icons } from '../../constants';

const Habit = ({ iconSource, habitName, description }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.habitName}>{habitName}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity onPress={toggleCompletion}>
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isCompleted ? '#4CAF50' : '#ccc' },
          ]}
        >
          {isCompleted && (
            <Image
              source={icons.checkmark} 
              style={styles.checkmark}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  habitName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});

export default Habit;
