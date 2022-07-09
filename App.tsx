import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';


const App = () => {
  return (
    <NavigationContainer>
      <FadeScreen/>
      {/* <Navigation/> */}
    </NavigationContainer>
  )
}

export default App;