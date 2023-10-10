import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  ScrollView, 
  StatusBar, } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite';

import styles from './Home.style'
import { icons, COLORS, SIZES, images } from "../constants"
import HeaderBtn from './header/Header'
import Progress from './progressBar/ProgressBar'
import Habit from './habit/Habit'
import HabitCreationModal from './habit/HabitCreationModal'

const Home = () => {
  const db = SQLite.openDatabase('my-db.db')
  const [habits, setHabits] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    db.transaction((tx) =>{
      tx.executeSql(
          'CREATE TABLE IF NOT EXISTS habits (id INTEGER PRIMARY KEY AUTOINCREMENT, iconSource TEXT, habitName TEXT, description TEXT, isComplete BOOLEAN)',
      )
    });

    db.transaction((tx) => {
      tx.executeSql('select * from habits', null,
        (txObj, resultSet) => setHabits(resultSet.rows._array),
        (txObj, error) => console.log(error),
      );
    });
  }, [db])


  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const saveHabit = (habitData) => {
    console.log('Saved Habit Data:', habitData);
  };

  const handleHabitClick = () => {
    if (progress >= 100) {
      setProgress(0);
    } else {
      setProgress(progress + 10);
    }
  };

  const habits1 = [
    { habitName: 'Read a book' },
    { habitName: 'Exercise for 30 minutes' },
    { habitName: 'Meditate for 10 minutes' },
    { habitName: 'Meditate for 10 minutes1' },
    { habitName: 'Meditate for 10 minutes2' },
    { habitName: 'Meditate for 10 minutes3' },
    { habitName: 'Meditate for 10 minutes4' },
    { habitName: 'Meditate for 10 minutes5' },
    { habitName: 'Meditate for 10 minutes6' },
    { habitName: 'Meditate for 10 minutes7' },
  ];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, top: StatusBar.currentHeight }}>
      <View style={{ flexDirection: 'row', top: 10, backgroundColor: COLORS.lightWhite, paddingLeft: SIZES.small, paddingRight: SIZES.small }}>
        <HeaderBtn iconUrl={images.profile} dimension="100%" />
        <View style={{ flex: 1 }}></View>
        <HeaderBtn iconUrl={icons.sort} dimension="60%" />
        <HeaderBtn iconUrl={icons.plus} dimension="60%" handlePress={openModal}/>
      </View>
      <View style={{ flex: 0.15 }}>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello Yuki</Text>
          <Text style={styles.welcomeMessage}>See your Progress today here</Text>
        </View>
      </View>
      <View style={{ paddingTop: SIZES.medium, paddingLeft: SIZES.small, paddingRight: SIZES.small }}>
        <Progress progress={progress} height={20} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 0.8, height: '200' }}>
        {habits.map((habit) => (
            <Habit
              key={habit.habitName}
              iconSource={icons.heartOutline}
              habitName={habit.habitName}
              description={habit.description}
              isComplete={false}
              onHabitClick={() => handleHabitClick()}
            />
          ))}
      </ScrollView>
      <View style={{ flex: 0.27}}>
      </View>

      <HabitCreationModal
        isVisible={isModalVisible}
        onClose={closeModal}
        db={db}
      />
    </SafeAreaView>
  )
}

export default Home