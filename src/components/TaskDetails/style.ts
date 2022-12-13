import { Modal } from '@mui/material';
import styled from 'styled-components';
import { widthEntryPoints } from '../../constants/constants';

const Overlay = styled(Modal)`
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

const TaskDetailsModal = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  min-width: 400px;
  max-width: 800px;
  min-height: 300px;
  width: 100%;
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

const TaskDetailsTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TaskDetailsDescription = styled.div`
  font-size: 14px;
`;

export {
  Overlay,
  TaskDetailsModal,
  TaskDetailsTitle,
  TaskDetailsDescription
};
