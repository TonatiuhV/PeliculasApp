import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';


interface Props extends StackScreenProps<any,any> {}

export const HomeScreen = ({ navigation}:Props) => {

  const {peliculasEnCine, isLoading} = useMovies();

  const {top}= useSafeAreaInsets()

  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100}/>
      </View>
    )
  }
  
  return (
    <View style={{marginTop:top+20}}>
      <MoviePoster movie={peliculasEnCine[0]}/>
    </View>
  )
}
