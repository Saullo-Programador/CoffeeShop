import React from 'react'
import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

interface UsuarioProps{
  name: string;
  avata?: ImageProps['source'];
}

export function Usuario( {name, avata}: UsuarioProps) {
  return (
    <View style={styles.Container}> 
      <Text style={styles.Name}>{name}</Text>
      { avata != null ? (
        <Image source={avata} style={styles.Avatar}/>
      ) : (
        <Icon name='user' size={30}  color='#fff'/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Name:{
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  Avatar:{
    width: 45,
    height: 45,
    borderRadius: 12,
  },
})