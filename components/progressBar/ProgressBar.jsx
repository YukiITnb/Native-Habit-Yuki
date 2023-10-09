import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';
import { COLORS } from '../../constants';

const Progress = ({progress, height}) =>{
    return(
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{}}>
            Kepp going!!!
          </Text>
          <View style={{flex:1}}></View>
          <Text style={{}}>
            {progress}%
          </Text>
        </View>
        <View style={{ height, backgroundColor: COLORS.gray, borderRadius: height, overflow: 'hidden' }}>
          <Animated.View style={{ height, backgroundColor: 'red', borderRadius: height, overflow: 'hidden', width: progress + '%' }}>
          </Animated.View>
        </View>
        
      </View>
    )
  }

export default Progress;
