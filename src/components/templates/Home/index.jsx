import React from 'react';
import NavigationOptionsMenu from '../../organisms/NavigationOptionsMenu';
import ProfileInformation from '../../organisms/ProfileInformation';
import Portfolio from '../../organisms/Portfolio';
import * as S from './styles';

const Home = () => (
  <S.Main>
    <S.Wrapper>
      <ProfileInformation />
      <S.Slot>
        <Portfolio></Portfolio>
      </S.Slot>
      {/* <NavigationOptionsMenu /> */}
    </S.Wrapper>
  </S.Main>
);

export default Home;
