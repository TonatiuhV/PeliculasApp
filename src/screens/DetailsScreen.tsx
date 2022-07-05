import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image,ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { MovieDetails } from '../components/MovieDetails'
import { useMovieDetails } from '../hooks/useMovieDetails'

import { RootStackParams } from '../navigation/Navigation'




const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams,'DetailsScreen'>{}

export const DetailsScreen = ({route}:Props) => {
  
  const movie = route.params
  const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id)

  return (
    <ScrollView>
          <StatusBar
            animated={true}
            translucent={true}
            backgroundColor='transparent'
            barStyle='light-content'
            
          />
          <View style={styles.imageContainer}>
              <Image
                source={{uri}}
                style={styles.posterImage}
              />
          </View>
          <View style={styles.marginContainer}>
            <Text style={styles.subTitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
            {
              isLoading ?
            (<ActivityIndicator
            color='gray'
            size={30}
            style={{marginTop:20}}
            />)
            :
            (<MovieDetails movieFull={movieFull!} cast={cast}/>)
            }
            
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    height: screenHeight*0.7,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    elevation:10,
    overflow:'hidden',
  },
  posterImage: {
    flex:1,
  },

  marginContainer: {
    marginHorizontal:20,
    marginTop:20,
  },
  subTitle:{
    fontSize:16,
    opacity:0.8,
  },
  title: {
    fontSize:20,
    fontWeight:'bold'
  }
})