import styled from 'styled-components';
import { styleVars } from '../../constants/constants';

const ColumnBlock = styled.div`
  position: relative;
  max-height: 65vh;
  min-height: 100px;
  min-width: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  background-color: ${styleVars.white};
`;

const ColumnTitle = styled.div`
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const AddTaskBtn = styled.div`
  cursor: pointer;
  display: block;
`;

const AddBoardImg = styled.img`
  width: 30px;
`;
const RemoveBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
`;

export { ColumnBlock, AddTaskBtn, AddBoardImg, ColumnTitle, RemoveBtn };
