import React, { useRef } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import Carousel from 'react-native-snap-carousel-v4';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';


interface Props extends StackScreenProps<any,any> {}

const  {width:windowWidth} = Dimensions.get('window');


export const HomeScreen = ({ navigation}:Props) => {

  const {peliculasEnCine, isLoading} = useMovies();
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
      <View style={{marginTop:top+20}}>
        {/* Carusel Principal */}
        <View style={{height:440}}>
          <Carousel
                  data={peliculasEnCine}
                  renderItem={({item}) => <MoviePoster  movie={item}/>}
                  sliderWidth={windowWidth}
                  itemWidth={300}
                  slideStyle={{
                    justifyContent:'center'
                  }}
                  vertical={false}
                  />
        </View>

        {/* Peliculas Poplares */}
        <View style={{backgroundColor:'red', height: 260}}>
          <Text style={{fontSize: 30, fontWeight:'bold'}}>En cine</Text>
          <FlatList
            data={peliculasEnCine}
            renderItem = {({item}) => (
            <MoviePoster movie={item}
              width={140}
              height={200}
              />
            
            )}
            keyExtractor={(item, index) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

        </View>
      </View>
    </ScrollView>
  )
}
