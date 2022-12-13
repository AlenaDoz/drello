import React from 'react';
import { useAppDispatch } from '../../hooks';
import {
  BoardOverlay,
  BoardWindow,
  InputName,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  CreateBoard,
  BoardWindowForm,
} from './style';
import { parseJWT } from '../../utils/utils';
import { useForm } from 'react-hook-form';
import { IEditBoard } from '../../types/interfaces';
import { SubmitHandler } from 'react-hook-form';
import { editBoards } from '../../store/boardSlice/boardActions';

interface IProps {
  isOpened: boolean;
  boardId: string;
  closeModal: () => void;
}

const EditBoard = ({ isOpened, boardId, closeModal }: IProps) => {
  const { register, reset, handleSubmit } = useForm<IEditBoard>();
  const dispatch = useAppDispatch();

  const handleCancelClick = () => {
    closeModal();
  };

  const clickHandler: SubmitHandler<IEditBoard> = (data: IEditBoard) => {
    dispatch(editBoards(data));
    closeModal();
    reset();
  };

  return (
    <BoardOverlay isOpened={isOpened}>
      <BoardWindow>
        <BoardWindowForm onSubmit={handleSubmit(clickHandler)}>
          <CreateBoard>EDIT BOARD</CreateBoard>
          <InputName type='text' placeholder='NAME' {...register('title')} />
          <input
            {...register('owner')}
            type='hidden'
            value={parseJWT(localStorage.getItem('token')!).id}
          />
          <input type='hidden' {...register('boardId')} value={boardId} />
          <ButtonBlock>
            <ButtonContinue type='submit'>CONTINUE</ButtonContinue>
            <ButtonCancel type='button' onClick={handleCancelClick}>
              CANCEL
            </ButtonCancel>
          </ButtonBlock>
        </BoardWindowForm>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default EditBoard;
