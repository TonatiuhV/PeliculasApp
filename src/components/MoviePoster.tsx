import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    height?:number,
    width?:number,
}

export const MoviePoster = ({movie, width=300, height=420}: Props) => {
  const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <View style={{
        width,
        height,
    }}>
        <View style={ styles.imageContainer}> 
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        borderRadius: 18,
        margin:4,
    },
    imageContainer:{
        flex:1,
        borderRadius:20,
        elevation: 8,
    }
})
