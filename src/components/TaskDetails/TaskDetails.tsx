import {
  Overlay,
  TaskDetailsDescription,
  TaskDetailsModal,
  TaskDetailsTitle,
} from './style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { EditableTitle } from '../EditableTitle/EditableTitle';
import { useCallback } from 'react';
import { IAddEditModal } from '../../types/interfaces';
import { updateTask } from '../../store/tasksSlice/tasksActions';
import { useParams } from 'react-router-dom';
import { setTaskDetails } from '../../store/tasksSlice/tasksSlice';

interface IProps {
  isOpened: boolean;
  closeModal: () => void;
}

const DeleteModal = ({ isOpened, closeModal }: IProps) => {
  const { taskDetails } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const boardId = useParams().id;

  const taskTitle = taskDetails?.title as string;
  const handleCancelClick = () => {
    closeModal();
  };

  const updateТaskHandler = useCallback(
    ({ title, description }: IAddEditModal) => {
      if (taskDetails && boardId) {
        const { columnId, _id, order, userId, users } = taskDetails;

        if (!title) {
          title = taskDetails.title;
        }

        if (!description) {
          description = taskDetails.description;
        }

        const data = {
          title,
          order: order,
          description,
          columnId,
          userId,
          users,
        };
        dispatch(
          updateTask({
            boardId,
            columnId,
            taskId: taskDetails._id,
            data,
          })
        );
        dispatch(setTaskDetails({ ...data, boardId, columnId, taskId: _id }));
      }
    },
    [boardId, dispatch, taskDetails]
  );

  return (
    <Overlay
      open={isOpened}
      onClose={handleCancelClick}
      disableAutoFocus={true}
    >
      <TaskDetailsModal>
        <TaskDetailsTitle>
          <EditableTitle title={taskTitle} dispatch={updateТaskHandler} />
        </TaskDetailsTitle>
        <TaskDetailsDescription>
          <EditableTitle description={taskDetails?.description} dispatch={updateТaskHandler} />
        </TaskDetailsDescription>
      </TaskDetailsModal>
    </Overlay>
  );
};

export default DeleteModal;
