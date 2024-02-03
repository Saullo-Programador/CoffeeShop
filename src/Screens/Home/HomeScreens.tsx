import React from 'react'
import { View, Text, FlatList, ListRenderItemInfo } from 'react-native'
import { Container, Header, Main, Nav } from './StyledHome'
import { Usuario } from '../../Components/UserComponents/Usuario'
import { SearchInput } from '../../Components/SearchComponents/SearchInput'
import Categoria from '../../Components/CategoriaComponents/Categoria'
import { CoffeeList, PropsCaffee } from '../../Constants/Data'
import { CoffeeItem } from '../../Components/ItemComponents/CoffeeItem'


export default function HomeScreens() {

  function renderItem({item} : ListRenderItemInfo<PropsCaffee>) {
    return <CoffeeItem {...item}/>
  }
  
  return (
    <Container>
      <Header>
        <Usuario name={'Saullo Paulo'}/>
        <SearchInput/>
      </Header>
      <Nav>
        <Categoria/>
      </Nav>
      <Main>
       <Container style={{marginLeft:5}}>
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
  )
}
