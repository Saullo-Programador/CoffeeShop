import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { PropsCaffee } from '../../Constants/Data';
import Icon from 'react-native-vector-icons/AntDesign'
import { Image } from 'react-native';

interface ProdutoProps{
  route:{
    params: PropsCaffee
  }
}


const ProdutoScreens: React.FC<ProdutoProps>= ({route}) => {
  const {
    image,
    name,
    stars,
    valor,
    categoria,
    desc,
    volume,
    id,
  } = route.params;

  const navigation = useNavigation()
  const [favorito , setFavoritos] = useState(false)
  const [star, setStar] = useState(false)
 const counterStar:number = 506

  function handleStateChange(){
    setStar((prev) => !prev)
  }

  function handleAddToFavs(){
   setFavoritos((prev) => !prev)

  }
  return (
    <View style={{ flex: 1, paddingVertical: 16, backgroundColor: '#FFFFFF',}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.BoxHeaderShown}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Icon name='left' size={26} color='#000000' />
          </TouchableOpacity>
          <Text style={{fontSize:24, color:'#000000',}}>Detalhe</Text>
          <TouchableOpacity onPress={handleAddToFavs}>
            <Icon name={ favorito ? 'heart' : 'hearto'} size={26}  color={ favorito ? '#ff0000' : '#000000'}/>
          </TouchableOpacity>
        </View>

        <View style={styles.BoxImg}>
          <Image source={image} style={styles.img}/>
        </View>

        <View style={styles.BoxGlobal}>
          <Text style={styles.Name}>{name}</Text>
        </View>

        <View style={styles.BoxGlobal}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center',  width: 100 ,}} onPress={handleStateChange}>
            <Icon name={star ? 'star': 'staro'} size={30} color={star ? '#ffff00FF': '#000000'}/>
            <Text style={styles.Star}>{stars}</Text><Text style={{fontSize:18}}>({counterStar})</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: '90%', height: 1, backgroundColor: '#cacaca', marginTop: 8, marginBottom: 15,}}></View>

        <View style={styles.BoxGlobal}>
          <Text style={styles.tituloDec}>Descrição</Text>
          <Text style={styles.Dec}>{desc}</Text>
        </View>

        <View style={styles.Size}>

        </View>

        <View style={styles.Footer}>

        </View>
      </SafeAreaView>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center',
  },
  BoxHeaderShown:{
    flexDirection: 'row',
    width: "90%",
    justifyContent: 'space-between',
    alignItems:'center',
  },
  BoxImg:{
    width: '100%',
    height: "38%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 350,
    height: 270,
    borderRadius: 20,
  },
  BoxGlobal:{
    width: '82%',
    marginBottom: 12,
  },
  Name:{
    fontSize: 26,
    fontWeight: 'bold',
    color: "black",
  },
  Star:{
    fontSize: 25,
    color: "black",
    fontWeight: '500',
    paddingLeft: 7,
    paddingRight: 4,
  },
  tituloDec:{
    fontSize: 23,
    fontWeight: '500',
    color: "black",
    marginBottom: 10,
  },
  Dec:{
    fontSize: 19,
    color: "black",
  },
  Size:{
    backgroundColor: '#ff0000',
    width: '100%',
    height: '12%',
  },
  Footer:{
    backgroundColor: '#F1F1F1',
    width: '100%',
    height: '17%',
  }
})
export default ProdutoScreens;