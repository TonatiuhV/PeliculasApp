import React, { useRef } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, ScrollView, StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors'

import Carousel from 'react-native-snap-carousel-v4';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';


interface Props extends StackScreenProps<any,any> {}

const  {width:windowWidth} = Dimensions.get('window');


export const HomeScreen = ({ navigation}:Props) => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top}= useSafeAreaInsets();
  const carousel = useRef(null)
  const getPosterColors = async (index:number) => {
    const movie =  nowPlaying[index];
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const {primary, secoundary} = await getImageColors(uri, movie.id.toString())
    console.log(primary,secoundary);
  }


  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100}/>
      </View>
    )
  }
  
  return (
    <GradientBackground>
      <ScrollView>
        <StatusBar
              animated={true}
              translucent
              backgroundColor='transparent'
              barStyle='dark-content'
            />
        <View style={{marginTop:top+20}}>
          {/* Carusel Principal */}
          <View style={{height:440}}>
            <Carousel
                    data={nowPlaying}
                    renderItem={({item}) => <MoviePoster  movie={item}/>}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    slideStyle={{
                      justifyContent:'center'
                    }}
                    vertical={false}
                    inactiveSlideOpacity={0.9}
                    onSnapToItem={ index => getPosterColors(index)}
                    />
          </View>

          {/* Peliculas Poplares */}
          <HorizontalSlider title='Populares' movies={popular}/>
          <HorizontalSlider title='Top Rated' movies={topRated}/>
          <HorizontalSlider title='Upcoming' movies={upcoming}/>
          {/* <HorizontalSlider

            movies={peliculasEnCine}
          /> */}
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
