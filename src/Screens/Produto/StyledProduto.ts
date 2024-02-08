import { StyleSheet} from 'react-native'
import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable' 

export const ContainerProduto = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const BoxHeaderShown = styled.View`
  width: 90%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const BoxImgProduto = styled(Animatable.View)`
  width: 100%;
  height: 39%;
  justify-content: center;
  align-items: center;
`;
export const BoxGlobalProduto = styled.View`
  width: 83%;
  margin-bottom: 12px;
`;
export const FooterProduto = StyleSheet.create({
  footer:{
    width: '100%',
    height: '17%',
    marginTop: 10,
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    gap: 25,
  },
})
