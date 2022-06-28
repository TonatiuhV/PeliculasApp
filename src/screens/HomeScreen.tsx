import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'


interface Props extends StackScreenProps<any,any> {}

export const HomeScreen = ({ navigation}:Props) => {

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
