import styled from 'styled-components';
import { widthEntryPoints } from '../../constants/constants';
import { fonts } from '../../constants/constants';

const BoardOverlay = styled.div<{ isOpened: boolean }>`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpened ? 1 : 0)};
`;

const BoardWindow = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  min-width: 400px;
  min-height: 200px;
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

const CreateBoard = styled.h2`
  color: grey;
  font-family: ${fonts.montserrat};
  @media (${widthEntryPoints.tablet}) {
    font-size: 19px;
  }
`;

const InputName = styled.input`
  width: 275px;
  height: 55px;
  font-family: ${fonts.raleway};
  border: 1px solid grey;
  padding: 15px 10px;
  border-radius: 7px;
  outline-color: #b7eaf7;
  @media (${widthEntryPoints.tablet}) {
    width: 180px;
    padding: 10px 7px;
  }
`;

const InputDescription = styled.textarea`
  width: 275px;
  height: 180px;
  font-family: ${fonts.raleway};
  border: 1px solid grey;
  padding: 15px 10px;
  border-radius: 7px;
  outline-color: #b7eaf7;
  resize: none;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px;
  font-family: ${fonts.montserrat};
  border-radius: 7px;
  outline: none;
  border: none;
  @media (${widthEntryPoints.tablet}) {
    width: 90px;
    padding: 8px 4px;
    font-size: 12px;
  }
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

const ErrorMessage = styled.p``;

export {
  BoardOverlay,
  BoardWindow,
  InputName,
  InputDescription,
  ButtonContinue,
  ButtonCancel,
  CreateBoard,
  Button,
  ButtonBlock,
  ErrorMessage,
};
