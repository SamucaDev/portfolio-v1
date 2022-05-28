import React from 'react';
import Profile from '../../molecules/Profile';
import * as S from './styles';

const ProfileInformation = () => {

  return (
    <S.SideNav>
      <S.Information>
        <Profile name="Samuel Rodrigues" profession="Desenvolvedor Front-end" />
      </S.Information>
      <S.Stacks></S.Stacks>
      <S.SocialMediaFooter></S.SocialMediaFooter>
    </S.SideNav>
  );
}

export default ProfileInformation;