import React from 'react'
import { ButtonInput, ContainerInput, Input } from './StyledSearch'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

export function SearchInput() {
  return (
    <ContainerInput>
      <Input placeholder='Search coffee' placeholderTextColor='#989898'/>
      <ButtonInput>
        <Icon name="search" size={25} color="#FFFFFF"/>
      </ButtonInput>
    </ContainerInput>
  )
}
