import { Modal } from '@mui/material';
import styled from 'styled-components';
import { widthEntryPoints, fonts } from '../../constants/constants';

const BoardOverlay = styled(Modal)`
  && .MuiBackdrop-root {
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  right: 0;
`;

const BoardWindow = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  min-width: 400px;
  min-height: 300px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 16px 40px rgb(0 0 0 / 50%);
  @media (${widthEntryPoints.tablet}) {
    max-width: 300px;
    min-width: 300px;
  }
`;

const DeleteImg = styled.img`
  width: 120px;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px;
  font-family: ${fonts.raleway};
  border-radius: 7px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonContinue = styled(Button)`
  background-color: #ffe4c9;
`;

const ButtonCancel = styled(Button)`
  background-color: #8a9ba7;
`;

const DelBoard = styled.h2`
  color: grey;
  font-family: ${fonts.montserrat};
`;

export {
  BoardOverlay,
  BoardWindow,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  DeleteImg,
  DelBoard,
};
