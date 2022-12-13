import { useCallback, useEffect, useState } from 'react';
import { BoardsBlock, BoardList, AddBoardButton, AddBoardImg } from './style';
import AddButton from '../../assets/images/add-board.svg';
import { parseJWT } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BoardPreview from '../../components/BoardPreview/BoardPreview';
import { Loading } from '../../components/Loading/Loading';
import { ErrorMessage, BoardsList } from './style';
import {
  creationOfBoard,
  getBoards,
} from '../../store/boardSlice/boardActions';
import { AddEditModal } from '../../components/AddEditModal/AddEditModal';
import { IBoard } from '../../types/interfaces';
import { resetColumns } from '../../store/columnsSlice/columnsSlice';
import { resetTasks } from '../../store/tasksSlice/tasksSlice';

const Boards = () => {
  const owner = parseJWT(localStorage.getItem('token')!).id;
  const { boards, shouldLoadBoards, errorMessage, isLoading } = useAppSelector(
    (state) => state.board
  );
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getBoards(owner));
  }, [dispatch, owner]);

  useEffect(() => {
    if (shouldLoadBoards) {
      dispatch(getBoards(owner));
    }
  }, [dispatch, owner, shouldLoadBoards]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    dispatch(resetColumns());
    dispatch(resetTasks());
  }, [dispatch]);

  const addBoard = useCallback(
    (data: IBoard) => {
      dispatch(creationOfBoard({ ...data, owner }));
      closeModal();
    },
    [closeModal, dispatch, owner]
  );

  const view = boards.map((board) => {
    return (
      <BoardPreview key={board._id} boardId={board._id} title={board.title} />
    );
  });

  return (
    <BoardsBlock>
      <BoardList>
        {isLoading && <Loading />}
        {!!errorMessage ? (
          <ErrorMessage>{errorMessage} </ErrorMessage>
        ) : (
          <BoardsList>{view}</BoardsList>
        )}
        <AddBoardButton onClick={openModal}>
          <AddBoardImg src={AddButton} alt='add' />
        </AddBoardButton>
        <AddEditModal
          title={'titleAdd'}
          isOpened={isModalOpen}
          closeModal={closeModal}
          dispatch={addBoard}
        />
      </BoardList>
    </BoardsBlock>
  );
};

export default Boards;
