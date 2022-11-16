import React from 'react';
import {
  BoardsBlock,
  BoardList,
  BoardCard,
  EditImg,
  BinImg,
  KanbanImg,
  CardName,
  Images,
  NameBlock,
  CardBlock,
  BoardDescription,
} from './style';
import EditImage from '../../assets/images/edit.svg';
import BinImage from '../../assets/images/bin.svg';
import KanbanImage from '../../assets/images/kanban.png';

const Boards = () => {
  return (
    <BoardsBlock>
      <BoardList>
        <BoardCard>
          <KanbanImg src={KanbanImage} alt='kanban' />
          <CardBlock>
            <NameBlock>
              <CardName>Name of board</CardName>
              <Images>
                <a href='/edit'>
                  <EditImg src={EditImage} alt='edit' />
                </a>
                <a href='/delete'>
                  <BinImg src={BinImage} alt='bin' />
                </a>
              </Images>
            </NameBlock>
            <BoardDescription>Description</BoardDescription>
          </CardBlock>
        </BoardCard>
        <BoardCard></BoardCard>
      </BoardList>
    </BoardsBlock>
  );
};

export default Boards;