import React from 'react'
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native'
import { Container, Header, Main, Nav } from './StyledHome'
import { Usuario } from '../../Components/UserComponents/Usuario'
import { SearchInput } from '../../Components/SearchComponents/SearchInput'
import Categoria from '../../Components/CategoriaComponents/Categoria'
import { CoffeeList, PropsCaffee } from '../../Constants/Data'
import { CoffeeItem } from '../../Components/ItemComponents/CoffeeItem'


export default function HomeScreens() {
  const use = require('../../Assets/Avatar/user.png');

  function renderItem({ item }: ListRenderItemInfo<PropsCaffee>) {
    return (
      <CoffeeItem {...item} />
    )
  }
  try {
    return (
      <Container>
        <Header>
          <Usuario name={'Saullo Paulo'} avata={use} />
          <SearchInput />
        </Header>
        <Nav>
          <Categoria />
        </Nav>
        <Main>
          <Container style={{ marginLeft: 5 }} animation="fadeInUp" delay={200}>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              data={CoffeeList}
              renderItem={renderItem}
              numColumns={2}
            />
          </Container>
        </Main>
      </Container>
    );
  } catch (error) {
    console.error("Error na HomeScreen", error)
    return (
      <View>
        <Text>Ocorreu um erro. Por favor, tente novamente mais tarde.</Text>
      </View>
    )
  }
}
