import React, { useState } from 'react';
import * as S from './styles';

const NavigationOptionsMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <S.Container style={menuOpen ? {
      width: '300px',
      position: 'absolute',
      right: 0,
      transition: '1.1s'
    } : {}}>
      <S.ButtonOpenOptions onClick={() => setMenuOpen(!menuOpen)}>
        <S.Button>
          <S.IconMenu></S.IconMenu>
        </S.Button>
      </S.ButtonOpenOptions>
      <S.ContentOptions></S.ContentOptions>
      <S.SetLanguage></S.SetLanguage>
    </S.Container>
  )
}

export default NavigationOptionsMenu;
