import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams,'DetailsScreen'>{}

export const DetailsScreen = ({route}:Props) => {
  
  const movie = route.params
  
  
  return (
    <View>
        <Text>HomeScreen</Text>
    </View>
  )
}
