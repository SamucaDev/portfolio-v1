import React from 'react';
import NavigationOptionsMenu from '../../organisms/NavigationOptionsMenu';
import ProfileInformation from '../../organisms/ProfileInformation';
import * as S from './styles';

const Home = () => (
  <S.Main>
    <S.Wrapper>
      <ProfileInformation />
      <S.Slot></S.Slot>
      <NavigationOptionsMenu />
    </S.Wrapper>
  </S.Main>
);

export default Home;
