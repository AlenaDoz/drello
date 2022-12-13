import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import { widthEntryPoints } from '../../constants/constants';

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  padding: 40px;
  @media (${widthEntryPoints.tablet}) {
    width: 300px;
  }
`;

export const TitleModal = styled.h3`
  text-align: center;
`;

export const ButtonModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButtonModal = styled(Button).attrs({
  variant: 'contained',
  disableElevation: true,
})`
  && {
    font-weight: bold;
  }
`;
