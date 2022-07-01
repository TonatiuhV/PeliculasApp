import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieINterface';


interface Props extends StackScreenProps<any,any> {}

export const HomeScreen = ({ navigation}:Props) => {


  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing')
      .then( resp => {
        console.log(resp.data.results[0].title )
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
