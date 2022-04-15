import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  background-color: #1B1F33;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: calc(1366px - 24px);
  height: calc(100vh - 24px);
  display: flex;
  box-shadow: 0 4px 8px 0 rgb(15 15 20 / 20%);
`;

export const ProfessionalInformationMenu = styled.div`
  background-color: #2C3047;
  height: 100%;
  width: 21%;
`;


export const Slot = styled.div`
  background-color: #282C40;
  height: 100%;
  width: 73%;
`;


export const NavigationOptionsMenu = styled.div`
  background-color: #2C3047;
  height: 100%;
  width: 6%;
`;