import React, { useCallback, useState } from 'react';
import {
  BoardCard,
  KanbanImg,
  CardBlock,
  NameBlock,
  CardName,
  EditImg,
  Images,
  BinImg,
} from '../../pages/Boards/style';
import EditImage from '../../assets/images/edit.svg';
import BinImage from '../../assets/images/bin.svg';
import KanbanImage from '../../assets/images/kanban.png';
import { useNavigate } from 'react-router-dom';
import DeleteBoard from '../DeleteModal/DeleteModal';
import { useAppDispatch } from '../../hooks';
import { editBoards, removeBoard } from '../../store/boardSlice/boardActions';
import { AddEditModal } from '../AddEditModal/AddEditModal';
import { IBoard } from '../../types/interfaces';
import { parseJWT } from '../../utils/utils';

interface IProps {
  title: string;
  boardId: string;
}

const BoardPreview = React.memo(({ title, boardId }: IProps) => {
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/board/${boardId}`);
  };

  const closeModal = useCallback(() => {
    setIsEditModalOpened(false);
    setIsDeleteModalOpened(false);
  }, []);

  const deleteBoard = useCallback(() => {
    closeModal();
    dispatch(removeBoard(boardId));
  }, [boardId, closeModal, dispatch]);

  const editBoard = useCallback(
    (data: IBoard) => {
      const owner = parseJWT(localStorage.getItem('token')!).id;
      dispatch(editBoards({ boardId, ...data, owner }));
      closeModal();
    },
    [boardId, closeModal, dispatch]
  );

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditModalOpened(true);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpened(true);
  };

  return (
    <>
      <BoardCard onClick={handleClick}>
        <KanbanImg src={KanbanImage} alt='kanban' />
        <CardBlock>
          <NameBlock>
            <CardName>{title}</CardName>
            <Images>
              <div onClick={handleEditClick}>
                <EditImg src={EditImage} alt='edit' />
              </div>
              <div onClick={handleDeleteClick}>
                <BinImg src={BinImage} alt='bin' />
              </div>
            </Images>
          </NameBlock>
        </CardBlock>
      </BoardCard>
      <DeleteBoard
        isOpened={isDeleteModalOpened}
        dispatch={deleteBoard}
        closeModal={closeModal}
      />
      <AddEditModal
        title={'titleEdit'}
        titleValue={title}
        isOpened={isEditModalOpened}
        closeModal={closeModal}
        dispatch={editBoard}
      />
    </>
  );
});

export default BoardPreview;
