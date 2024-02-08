import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { ContainerPedido, FooterPedido, HeaderPedido, MainPedido } from "./StyledPedido";
import { BoxHeaderShown } from "../Produto/StyledProduto"; import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "../../Components/ButtonComponents/Button";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function PedidoScreen() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [unidade, setUnidade] = useState<number>(1)
  const valorProduto: number = 4.50
  const valorFinal: number = unidade * valorProduto
  const img = require('../../Assets/Mocha/Mocha1.png')

  async function handletest() {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500))
      navigation.navigate("Home")
    } catch (error) {
      console.error("Erro ao realizar o pedido: ", error)
      Alert.alert("Erro ao realizar o pedido. Por favor, Tente novamente.")
    } finally {
      Alert.alert("Seu pedido foi realizado com sucesso!")
      setLoading(false)
    }
  }
  try {
    return (
      <View style={{ flex: 1, paddingVertical: 16, backgroundColor: '#FFFFFF', }}>
        <ContainerPedido>
          <BoxHeaderShown>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name='left' size={26} color='#000000' />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, color: '#000000', }}>Pedido</Text>
            <View style={{ width: 25, }}></View>
          </BoxHeaderShown>
          <HeaderPedido>
            <View style={[styles.BoxDefault, { alignItems: "center", }]}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View style={styles.BoxImg}><Image source={img} style={styles.img} /></View>
                <Text style={[styles.title, { paddingLeft: 10, }]}>Caputino</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 90, }}>
                <TouchableOpacity onPress={() => setUnidade(prevunidade => prevunidade + 1)}>
                  <Icon name="pluscircle" color='#C67C4E' size={28} />
                </TouchableOpacity>
                <Text style={styles.title}>{unidade}</Text>
                <TouchableOpacity onPressIn={() => setUnidade(prevunidade => prevunidade - 1)}>
                  <Icon name="minuscircle" color='#C67C4E' size={28} />
                </TouchableOpacity>
              </View>
            </View>
          </HeaderPedido>
          <MainPedido>
            <View style={styles.BoxDefault}>
              <Text style={styles.title}>Resumo do pagamento</Text>
            </View>
            <View style={styles.BoxDefault}>
              <Text style={styles.textDefault}>Preço</Text>
              <Text style={styles.preco}>$ {valorProduto}0</Text>
            </View>
            <View style={styles.BoxDefault}>
              <Text style={styles.textDefault}>Quantidade</Text>
              <Text style={styles.preco}>{unidade}</Text>
            </View>
            <View style={{ width: '93%', height: 1, backgroundColor: '#cacaca', marginTop: 15, }}></View>
            <View style={styles.BoxDefault}>
              <Text style={styles.textDefault}>Pagamento Total</Text>
              <Text style={styles.preco}>$ {valorFinal}</Text>
            </View>
          </MainPedido>
          <FooterPedido animation='fadeInUp' delay={100}>
            <Button
              title='Finalizar Compra'
              onPress={handletest}
              isLoading={loading}
            />
          </FooterPedido>
        </ContainerPedido>
      </View>
    )
  } catch (error) {
    console.error("Error na PedidoScreen", error)
    return (
      <View>
        <Text>Ocorreu um erro. Por favor, tente novamente mais tarde.</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  BoxDefault: {
    width: '100%',
    height: 'auto',
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  BoxImg: {
    width: 65,
    height: 65,
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  textDefault: {
    fontSize: 19,
    color: "black",
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  }
})