import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    height?:number,
    width?:number,
}

export const MoviePoster = ({movie, width=300, height=420}: Props) => {
  const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress={() =>{navigation.navigate("DetailsScreen",movie)}}
        style={{
            width,
            height,
            borderRadius: 18,        
            elevation: 8,
        }}>
        <View style={ styles.imageContainer}> 
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image: {
        flex:1,
    },
    imageContainer:{
        flex:1,
        borderRadius:20,
        paddingLeft:3,
        paddingRight:9,
        paddingBottom:8,
    }
})
