import React from 'react';
import * as S from './styles';

const Home = () => (
  <S.Main>
    <S.Wrapper>
      <S.ProfessionalInformationMenu></S.ProfessionalInformationMenu>
      <S.Slot></S.Slot>
      <S.NavigationOptionsMenu></S.NavigationOptionsMenu>
    </S.Wrapper>
  </S.Main>
);

export default Home;
