import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 100px;
`;

export const NotFoundDescription = styled.h3`
  font-size: 40px;
`;

export const NotFoundLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;
