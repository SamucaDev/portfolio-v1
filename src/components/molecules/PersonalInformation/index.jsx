import React from 'react';
import * as S from './styles'
import GitHubIcon from '@mui/icons-material/GitHub';

const PersonalInformation = ({ }) => {
  return (
    <S.Wrapper>
      <S.Basic>
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
      </S.Basic>
      <S.Divider></S.Divider>
      <S.School>
        <S.NameSchool>Universidade: Bacharel em Sistemas de Informação - FIAP</S.NameSchool>
      </S.School>
      <S.School>
        <S.NameSchool>Técnico: Desenvolvimento de Sistemas - FITO</S.NameSchool>
      </S.School>
      <S.Divider></S.Divider>
      <S.Language>
        <S.NameLanguage>Inglês: Avançado</S.NameLanguage>
      </S.Language>
      <S.Divider></S.Divider>
      <S.SocialMedia>
        <S.IconGitHub />
        <S.Enterprise>GitHub</S.Enterprise>
      </S.SocialMedia>
      <S.SocialMedia>
        <S.IconLinkedIn />
        <S.Enterprise>LinkedIn</S.Enterprise>
      </S.SocialMedia>
      <S.SocialMedia>
        <S.IconMail />
        <S.Enterprise>Email</S.Enterprise>
      </S.SocialMedia>
    </S.Wrapper>
  );
};

export default PersonalInformation;