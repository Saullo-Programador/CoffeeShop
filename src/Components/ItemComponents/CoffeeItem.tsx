import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Boxicon, CarContainer, ContainerImg } from './StyledItem'
import { Image } from 'react-native'
import { PropsCaffee } from '../../Constants/Data'
import Icon from 'react-native-vector-icons/FontAwesome6'
import Star from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export function CoffeeItem({image, name, stars, valor, categoria, desc, volume, id}:PropsCaffee) {

  const [addCarinho, setAddcarrinho] = useState(false);
  function handleAddCar(){
    setAddcarrinho((prevAddCarrinho) => !prevAddCarrinho)
  }

  const navigation = useNavigation();
  return (
    <CarContainer>
      <ContainerImg>
        <TouchableOpacity onPress={() => navigation.navigate('Produto', {image, name, stars, valor, categoria, desc, volume, id})}>
          <Image style={styles.img} source={image}/>
          <View style={styles.BoxStar}>
            <Star name='star' size={18} color='#ffff00FF'/>
            <Text style={{color: '#FFFFFF', fontSize: 17, paddingHorizontal: 7,fontWeight: 'bold', }}> 
              {stars} 
            </Text>
          </View>
        </TouchableOpacity>
      </ContainerImg>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.BoxFooter}>
        <Text style={styles.TextValor}>$ {valor}</Text>
        <Boxicon onPress={handleAddCar}>
          <Icon name={addCarinho ? "minus" : 'plus' }size={25} color='#FFFFFF'/>
        </Boxicon>
      </View>
    </CarContainer>
  )
}

const styles = StyleSheet.create({
  img:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  title:{
    fontSize: 22,
    marginLeft: 1,
    fontWeight: 'bold',
    color: '#000000',
  }, 
  BoxFooter:{
    flexDirection:'row', 
    width:'100%', 
    justifyContent:'space-between', 
    alignItems: 'center', 
    paddingHorizontal:5,
  },
  TextValor:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  BoxStar:{
    position:'absolute', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingLeft: 3,
    paddingTop: 5,
    backgroundColor: '#2221216f',
    width: 70,
    height: 30,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
})