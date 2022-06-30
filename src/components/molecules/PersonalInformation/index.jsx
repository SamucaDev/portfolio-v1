import React from 'react';
import * as S from './styles'

const PersonalInformation = ({ }) => {

  return (
    <S.Wrapper>
      <S.Topics>
        <S.Topic>
          <S.Name>País:</S.Name>
          <S.Value>Brasil</S.Value>
        </S.Topic>
        <S.Topic>
          <S.Name>Estado:</S.Name>
          <S.Value>São Paulo</S.Value>
        </S.Topic>
        <S.Topic>
          <S.Name>Idade:</S.Name>
          <S.Value>20</S.Value>
        </S.Topic>
      </S.Topics>

      <S.Divider></S.Divider>
    </S.Wrapper>
  );
};

export default PersonalInformation;