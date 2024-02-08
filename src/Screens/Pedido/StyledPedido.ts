import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable' 

export const ContainerPedido = styled.View`
  flex: 1;
  align-items: center;
`

export const HeaderPedido =styled.View`
  width: 100%;
  height: auto;
`

export const MainPedido = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
`

export const FooterPedido = styled(Animatable.View)`
  width: 100%;
  height: 17%;
  background-color: #F1F1F1;
  position: absolute;
  top: 85%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 30px;
  padding-bottom: 20px;
`