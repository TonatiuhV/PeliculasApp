import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/movieDB';


interface Props extends StackScreenProps<any,any> {}

export const HomeScreen = ({ navigation}:Props) => {


  useEffect(() => {
    movieDB.get('/now_playing')
      .then( resp => {
        console.log(resp.data )
      }).catch( error => {
        console.log(error)
      })
  
  }, [])
  
  
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
