import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from '../../Components/ButtonComponents/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { BoxFooterWelcome, BoxImgWelcome, BoxMainWelcome, ContainerWelcome } from './StyledWelcome';

export function Welcome() {
  const img = require('../../Assets/welcome/image.png')
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  async function handleStartGame() {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 100));
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      try {
        navigation.navigate('Home')
      } catch (error) {
        console.log("Error: Erro ao tentar entrar na Screen Home do App: ", error);
      }
    }
  }

  try {
    return (
      <ContainerWelcome>
        <BoxImgWelcome>
          <Image source={img} style={styles.image} />
        </BoxImgWelcome>

        <BoxMainWelcome>
          <Text style={styles.title}>Café tão bom que seu paladar vai adorar.</Text>
          <Text style={styles.desc}>O melhor grão, a torra mais fina, o sabor poderoso.</Text>
        </BoxMainWelcome>

        <BoxFooterWelcome>
          <Button
            title={'Acessar'}
            onPress={handleStartGame}
            isLoading={loading}
            iconName=''
          />
        </BoxFooterWelcome>
      </ContainerWelcome>
    );
  } catch (error) {
    console.error("Error ao WelcomeScreen: ", error);
    return (
      <View>
        <Text>Erro ao iniciar o App. Por favor, tente novamente mais tarde.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 10,
  },
  desc: {
    color: '#999',
    fontSize: 19,
    textAlign: 'center',
    paddingHorizontal: 50,
    marginTop: 15,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    marginBottom: 50,
  }
});
