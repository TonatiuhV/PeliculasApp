import React from 'react'
import { Text, View } from 'react-native'


import  Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'

import { Cast } from '../interfaces/cretisInterface';
import { MovieFull } from '../interfaces/movieInterface'
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';




interface Props {
    movieFull: MovieFull;
    cast:Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
        {/* Details */}
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:'row'}}>
                <Icon
                    name='star-outline'
                    color="gray"
                    size={16}/>
                <Text> {movieFull.vote_count}</Text>
                <Text style={{marginLeft:5}}>
                    - {movieFull.genres.map(g => g.name).join(', ')}
                </Text>
            </View>
            {/* Historia */}
            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize:16}}>
                {movieFull.overview}
            </Text>
            {/* Presupuesto */}
            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>
                Presupuesto
            </Text>
            <Text style={{fontSize:18}}>
                {currencyFormatter.format(movieFull.budget, {code:'USD'})}
            </Text>
        </View>

        {/* Casts */}
        <View style={{
            marginTop:10,
            marginBottom:100,
        }}>
            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold', marginHorizontal:20}}>
                Actores
            </Text>
            <FlatList
                data={cast}
                keyExtractor = {(item) => item.id.toString()}
                renderItem = {({item}) => <CastItem actor={item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop:20,
                }}
            />
        </View>

    </>
  )
}
