import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

export const HomeScreen = () => {
  const navigation =  useNavigation();
  return (
    <View>
        <Text>HomeScreen</Text>
        <Button
            title='Ir detalle'
            onPress={() =>navigation.navigate("DetailsScreen")}
        />
    </View>
  )
}
