import styled from 'styled-components';
import Menu from '@mui/icons-material/Menu'

export const Container = styled.div`
  background-color: #2C3047;
  height: 100%;
  width: 6%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  transition: 0.2s;
`;

export const ButtonOpenOptions = styled.div`
  background-color: #292d42;
  height: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentOptions = styled.div`
  background-color: #24283a;
  height: 80%;
`;

export const SetLanguage = styled.div`
  background-color: #292d42;
  height: 13%
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const IconMenu = styled(Menu)`
  color: #57608C;
  font-size: 32px;
`;