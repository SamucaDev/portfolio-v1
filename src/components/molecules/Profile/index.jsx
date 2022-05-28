import React from 'react';
import * as S from './styles';

const Profile = ({ name, profession }) => {

  return (
    <S.Main>
      <S.BoxImageRadius>
        <S.Image src='' />
      </S.BoxImageRadius>
      <S.Name>{ name }</S.Name>
      <S.Profession>{ profession }</S.Profession>
    </S.Main>
  );
}

export default Profile;