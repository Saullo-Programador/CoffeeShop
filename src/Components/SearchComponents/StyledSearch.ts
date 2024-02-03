import { TextInput } from "react-native";
import styled from "styled-components/native";

export const ContainerInput = styled.View`
  width: 100%;
  height: 60px;
  border: 1px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-color: #FFFFFF;
`
export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  color: #FFFFFF;
`
export const ButtonInput = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background: #C67C4E;
  border-radius: 12px;
  margin-right: 4px;
  align-items: center;
  justify-content: center;
`