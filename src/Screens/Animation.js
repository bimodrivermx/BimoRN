import React, {useState, useEffect} from 'react'
import {Marker} from 'react-native-maps';
import { Animated, Easing, Button, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper';

export const Animation = () => {
    //State
    const [animacion, setAnimacion] = useState(new Animated.Value(0));
    const spin = animacion.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg']
    })
    //Lifecycle methods
    const animationReference = Animated.timing(animacion, {
            toValue: 1, 
            duration: 500, 
            easing: Easing.linear, 
            useNativeDriver: true
    })
    //React render
    return (
    <Animated.View style={{transform: [{rotate: spin}]},{perspective: 1000}}>
        <Animated.Image
        style={{transform: [{rotate: spin}] }}
        source = {require('../../assets/images/map-taxi.png')}
        />
        <Button title = 'Init animation' onPress = {() => animationReference.start()}/>
        <Button title = 'End animation' onPress = {() => {
            animationReference.stop()
            setAnimacion(new Animated.Value(0))
        }}/>
        <FAB
        style={styles.fab}
        small
        icon="camera"
        onPress={() => console.log('Pressed')}
        />
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })
  