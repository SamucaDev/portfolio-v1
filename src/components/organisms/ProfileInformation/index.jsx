import PersonalInformation from '../../molecules/PersonalInformation';
import Profile from '../../molecules/Profile';
import * as S from './styles';

const ProfileInformation = () => {

  return (
    <S.SideNav>
      <S.Information>
        <Profile name="Samuel Rodrigues" profession="Desenvolvedor Front-end" />
      </S.Information>
      <PersonalInformation></PersonalInformation>
      {/* <S.SocialMediaFooter></S.SocialMediaFooter> */}
    </S.SideNav>
  );
}

export default ProfileInformation;