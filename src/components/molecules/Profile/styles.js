import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;    
  flex-direction: column;
`;

export const BoxImageRadius = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 0 1rem 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.p`
  color: #FFF;
  font-family: 'Verdana', 'Arial', sans-serif;
  font-size: 18px;
  margin: 0 0 0.5rem 0; 
`;

export const Profession = styled.p`
  color: #DEDEDE;
  font-family: 'Verdana', 'Arial', sans-serif;
  font-size: 14px;
  margin: 0 0 0.5rem 0;
`;