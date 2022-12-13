import styled from 'styled-components';

const BoardBlock = styled.div`
  width: 95%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
  gap: 30px;
`;

const AddColumnBlock = styled.div`
  padding-top: 50px;
  margin-left: 30px;
`;

const AddColumnBtn = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const BackImage = styled.img`
  height: 40px;
  margin: 15px 0 15px 110px;
`;

export { BoardBlock, AddColumnBlock, AddColumnBtn, BackImage };
