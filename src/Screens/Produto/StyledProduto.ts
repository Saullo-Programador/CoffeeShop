import { StyleSheet} from 'react-native'
import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable' 

export const ContainerProduto = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const BoxHeaderShownProduto = styled.View`
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

// width: '100%',
// marginTop: 10,
// height: 17%;
// background-color: #F1F1F1;
// padding-left: 12px;
// padding-right: 12px;
// flex-direction: row;
// justify-content: space-around;
// align-items: center;
// border-top-right-radius: 24px;
// border-top-left-radius: 24px;
// gap: 25px;