import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/cretisInterface'


interface Props{
    actor:Cast
}

export const CastItem = ({actor}: Props) => {
  const uri =`https://image.tmdb.org/t/p/w500${actor.profile_path}`
  return (
    <View style={styles.container}>
        {
            actor.profile_path &&
            <Image
            source={{uri}}
            style={{
                width:65,
                height:65,
                borderRadius:10,
            }}
        />
        }
        <View style={styles.actorInfo}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>
                {actor.name}
            </Text>
            <Text adjustsFontSizeToFit style={{fontSize:15, opacity:0.8}}>
                {actor.character}
            </Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        height:65,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:5,
        paddingRight:15,
        elevation:8,

    },
    actorInfo:{
        marginLeft:10,
        marginTop:5,
        marginEnd:10,
    }
})