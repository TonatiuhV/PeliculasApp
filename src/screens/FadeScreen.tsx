import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F64',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}></Animated.View>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <Button title="On FadeIn" onPress={() => fadeIn()} />
        <Button title="On FadeOut" onPress={() => fadeOut()} />
      </View>
    </View>
  );
};
