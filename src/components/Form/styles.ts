import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fonts, widthEntryPoints, styleVars } from '../../constants/constants';

export const TitleForm = styled(Typography).attrs({
  variant: 'h3',
  component: 'div',
})`
  &&.MuiTypography-root {
    margin: 30px 0 20px;
    text-align: center;
    font-family: ${fonts.montserrat};
    font-size: 2.7rem;
  }
  @media (${widthEntryPoints.tablet}) {
    &&.MuiTypography-root {
      font-size: 2rem;
    }
  }
`;

export const FormWrapper = styled(Box).attrs({ component: 'form' })`
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 450px;
  padding: 40px 5px;
  width: 100%;
  box-shadow: 0 16px 40px rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;

export const ButtonSubmit = styled(Button).attrs({
  type: 'submit',
  variant: 'contained',
  disableElevation: true,
})`
  && {
    width: 60%;
    background-color: ${styleVars.sand};
    font-size: 20px;
    color: ${styleVars.black};
    margin-top: 20px;
    font-family: ${fonts.montserrat};
  }
  &&:hover {
    background-color: ${styleVars.grey};
  }
  font-family: ${fonts.montserrat};
`;

export const LinkFormWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
  && {
    font-size: 14px;
    font-family: ${fonts.montserrat};
  }
`;

export const NavLinkForm = styled(NavLink)`
  font-weight: bold;
  color: ${styleVars.darkblue};
  text-decoration: none;
`;
