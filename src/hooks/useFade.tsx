import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null)); // pude resivir un collback
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(); // pude recibir un collback
  };
  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
