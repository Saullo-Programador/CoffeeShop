import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable' 

export const Container = styled(Animatable.View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #F9F9F9;
`;

export const Header = styled.View`
  width: 100%;
  height: 24%;
  gap: 10px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Nav = styled.View`
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.View`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 20px;
`;
