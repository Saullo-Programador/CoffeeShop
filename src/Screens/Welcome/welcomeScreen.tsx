import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from '../../Components/ButtonComponents/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { BoxFooterWelcome, BoxImgWelcome, BoxMainWelcome, ContainerWelcome } from './StyledWelcome';

export function Welcome() {
  const img = require('../../Assets/welcome/image.png')
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  function handleStartGame() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 0);
    navigation.navigate('Home')
  }


  return (
    <ContainerWelcome>
      <BoxImgWelcome>
        <Image source={img} style={styles.image}/>
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
}

const styles = StyleSheet.create({
  title:{
    color: '#FFFFFF',
    fontSize: 35,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 10,
  },
  desc:{
    color: '#999',
    fontSize: 19,
    textAlign: 'center',
    paddingHorizontal: 50,
    marginTop: 15,
    marginBottom: 20,
  },
  image:{
   width: '100%',
   marginBottom: 50,
  }
});
 