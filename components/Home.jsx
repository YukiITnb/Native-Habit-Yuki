import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
// import { useRouter } from 'expo-router'

import styles from './Home.style'
import { icons, COLORS, SIZES } from "../constants"
import HeaderBtn from './header/Header'
import Progress from './progressBar/ProgressBar'
import Habit from './habit/Habit'
import HabitCreationModal from './habit/HabitCreationModal'


const Home = () => {
  // const router = useRouter()
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const saveHabit = (habitData) => {
    // Implement your logic to save the habit data, e.g., store it in state or a database.
    console.log('Saved Habit Data:', habitData);
  };

  const handleHeartClick = () => {
    if (progress >= 100) {
      setProgress(0);
    } else {
      setProgress(progress + 10);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={{ flexDirection: 'row', top: 10, backgroundColor: COLORS.lightWhite }}>
        <HeaderBtn iconUrl={icons.menu} dimension="60%" />
        <View style={{ flex: 1 }}></View>
        <HeaderBtn iconUrl={icons.sort} dimension="60%" />
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
        <TouchableOpacity onPress={handleHeartClick}>
          <Image
            source={icons.heart}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
        <Habit iconSource={icons.heartOutline} habitName='read book' description='read 3 page of book' />
      </ScrollView>
      <View style={{ flex: 0.2}}>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <HabitCreationModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSave={saveHabit}
      />
    </SafeAreaView>
  )
}

export default Home