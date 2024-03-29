import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { PropsCaffee } from '../../Constants/Data';
import Icon from 'react-native-vector-icons/AntDesign'
import { Image } from 'react-native';
import { Button } from '../../Components/ButtonComponents/Button';
import { BoxGlobalProduto, BoxHeaderShown, BoxImgProduto, ContainerProduto, FooterProduto } from './StyledProduto';

import * as Animatable from 'react-native-animatable'

export interface ProdutoProps {
  route: {
    params: PropsCaffee
  }
}

const ProdutoScreen: React.FC<ProdutoProps> = ({ route }: ProdutoProps) => {
  const {
    image,
    name,
    stars,
    valor,
    id,
    categoria,
    desc,
    volume,
  } = route.params;

  const navigation = useNavigation()
  const [star, setStar] = useState(false)
  const counterStar: number = 506
  const [loading, setLoading] = useState(false)

  async function handleButtonOnPress() {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 100))
      setLoading(false)
    } catch (error) {
      console.error("Erro", error)
    } finally {
      try {
        navigation.navigate('Pedido');
      } catch (error) {
        console.error("Erro ao tentar entrar na Screen do pedido: ", error)

      }
    }
  }

  function handleStateChange() {
    setStar((prev) => !prev)
  }
  try {
    return (
      <View style={{ flex: 1, paddingVertical: 16, backgroundColor: '#FFFFFF', }}>
        <ContainerProduto>
          <BoxHeaderShown>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name='left' size={26} color='#000000' />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: '#000000', }}>Detalhe</Text>
            <View style={{ width: 25, }}></View>
          </BoxHeaderShown>
          <BoxImgProduto animation="flipInY">
            <Image source={image} style={styles.img} />
          </BoxImgProduto>
          <BoxGlobalProduto>
            <Text style={styles.Name}>{name}</Text>
          </BoxGlobalProduto>
          <BoxGlobalProduto>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: 100, }} onPress={handleStateChange}>
              <Icon name={star ? 'star' : 'staro'} size={30} color={star ? '#ffff00FF' : '#000000'} />
              <Text style={styles.Star}>{stars}</Text><Text style={{ fontSize: 18 }}>({counterStar})</Text>
            </TouchableOpacity>
          </BoxGlobalProduto>

          <View style={{ width: '90%', height: 1, backgroundColor: '#cacaca', marginTop: 8, marginBottom: 15, }}></View>

          <BoxGlobalProduto>
            <Text style={styles.tituloDecVol}>Tamanho</Text>
            <Text style={styles.volume}>{volume} ml</Text>
          </BoxGlobalProduto>

          <BoxGlobalProduto>
            <Text style={styles.tituloDecVol}>Descrição</Text>
            <Text style={styles.Dec}>{desc}</Text>
          </BoxGlobalProduto>

          <Animatable.View style={FooterProduto.footer} animation="fadeInUp" delay={200} >
            <View style={{ width: '25%', height: '85%', justifyContent: 'center', paddingLeft: 15, }}>
              <Text style={styles.titleValor}>Preço:</Text>
              <Text style={styles.valor}>$ {valor}</Text>
            </View>
            <View style={{ width: '70%', height: '70%', justifyContent: 'center', alignItems: 'center', }}>
              <Button
                title={'Compre Agora'}
                isLoading={loading}
                onPress={handleButtonOnPress}
                iconName='shoppingcart'
              />
            </View>
          </Animatable.View>
        </ContainerProduto>
      </View>
    )
  } catch (error) {
    console.error("Error na ProdutoScreen", error)
    return (
      <View>
        <Text>Ocorreu um erro. Por favor, tente novamente mais tarde.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: 365,
    height: 285,
    borderRadius: 20,
  },
  Name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "black",
  },
  Star: {
    fontSize: 25,
    color: "black",
    fontWeight: '500',
    paddingLeft: 7,
    paddingRight: 4,
  },
  tituloDecVol: {
    fontSize: 23,
    fontWeight: '500',
    color: "black",
    marginBottom: 5,
  },
  volume: {
    fontSize: 22,
    marginLeft: 5,
  },
  Dec: {
    fontSize: 20,
    marginLeft: 5,
  },
  titleValor: {
    fontSize: 20,
  },
  valor: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#C67C4E"
  },
})
export default ProdutoScreen;