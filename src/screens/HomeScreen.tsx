import React, { useRef } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, ScrollView, StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import Carousel from 'react-native-snap-carousel-v4';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';


interface Props extends StackScreenProps<any,any> {}

const  {width:windowWidth} = Dimensions.get('window');


export const HomeScreen = ({ navigation}:Props) => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top}= useSafeAreaInsets();
  const carousel = useRef(null)



  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100}/>
      </View>
    )
  }
  
  return (
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
  )
}
