import { Button } from '@mui/material';
import styled from 'styled-components';
import { fonts, styleVars, widthEntryPoints } from '../../constants/constants';

export const UpdateButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 85%;
  @media (${widthEntryPoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 80%;
  }
`;

export const ButtonUpdate = styled(Button).attrs({
  type: 'submit',
  variant: 'contained',
  disableElevation: true,
})`
  && {
    font-family: ${fonts.montserrat};
    background-color: ${styleVars.sand};
    width: 170px;
    height: 70px;
    padding: 10px;
    border-radius: 7px;
    outline: none;
    border: none;
    color: ${styleVars.black};
  }
  &&:hover {
    background-color: ${styleVars.darkblue};
  }
  @media (${widthEntryPoints.tablet}) {
    && {
      width: 200px;
      height: 50px;
    }
  }
`;

export const ButtonDelete = styled(Button).attrs({
  variant: 'contained',
  disableElevation: true,
})`
  && {
    color: ${styleVars.black};
    font-family: ${fonts.montserrat};
    background-color: ${styleVars.grey};
    width: 170px;
    height: 70px;
    padding: 10px;
    border-radius: 7px;
    outline: none;
    border: none;
  }
  &&:hover {
    background-color: ${styleVars.darkblue};
  }
  @media (${widthEntryPoints.tablet}) {
    && {
      width: 200px;
      height: 50px;
    }
  }
`;
