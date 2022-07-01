import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';


interface Props extends StackScreenProps<any,any> {}

export const HomeScreen = ({ navigation}:Props) => {

  const {peliculasEnCine, isLoading} = useMovies();
  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100}/>
      </View>
    )
  }
  
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
