import styled from 'styled-components';

const BoardOverlay = styled.div<{ isOpened: boolean }>`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpened ? 1 : 0)}; ;
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
`;

const CreateBoard = styled.h2`
  color: grey;
  font-family: Roboto;
`;

const InputName = styled.input`
  width: 275px;
  height: 55px;
  font-family: Roboto;
  border: 1px solid grey;
  padding: 15px 10px;
  border-radius: 7px;
  outline-color: #b7eaf7;
`;

const InputDescription = styled.textarea`
  width: 275px;
  height: 180px;
  font-family: Roboto;
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
  font-family: Roboto;
  border-radius: 7px;
  outline: none;
  border: none;
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
