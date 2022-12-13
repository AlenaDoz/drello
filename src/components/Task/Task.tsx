import { useCallback, useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteTask, updateTask } from '../../store/tasksSlice/tasksActions';
import { setCurrentTask, toogleDeleteTaskModal } from '../../store/tasksSlice/tasksSlice';
import { IDnDItem, IdropResult, ITask } from '../../types/interfaces';
import DeleteModal from '../DeleteModal/DeleteModal';
import { RemoveBtn, TaskBlock } from './styles';

interface Props {
  data: ITask;
  index: number;
  onClick: Function;
}

export const Task = ({ data, index, onClick }: Props) => {
  const { _id, title, columnId, description, userId, users } = data;
  const { isTaskDeleteModalOpen, currentTask } = useAppSelector((state) => state.tasks);
  const boardId = useParams().id;
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLInputElement>(null);

  const [, drop] = useDrop<IDnDItem>({
    accept: 'task',
    hover(item: IDnDItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      if (clientOffset) {
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (
          dragIndex &&
          dragIndex < hoverIndex &&
          hoverClientY < hoverMiddleY
        ) {
          return;
        }

        if (
          dragIndex &&
          dragIndex > hoverIndex &&
          hoverClientY > hoverMiddleY
        ) {
          return;
        }
      }

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { index, title, _id, columnId, type: 'task' },
    end: (item, monitor) => {
      const dropResult: IdropResult | null = monitor.getDropResult();

      if (dropResult && boardId) {
        const { _id } = item;
        const order = item.index;
        const columnId = dropResult.newColumnId;

        if (dropResult.children.length > order) {
          const prevTask = dropResult?.children[order].props.data;

          dispatch(
            updateTask({
              boardId,
              columnId,
              taskId: prevTask._id,
              data: {
                title: prevTask.title,
                description: prevTask.description,
                columnId: prevTask.columnId,
                userId: prevTask.userId,
                users: prevTask.users,
                order: prevTask.order - 1,
              },
            })
          );
        }

        dispatch(
          updateTask({
            boardId,
            columnId,
            taskId: _id,
            data: { title, order, description, columnId, userId, users },
          })
        );
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  const deleteTaskModalOpen = useCallback(() => {
    dispatch(setCurrentTask(data._id));
    dispatch(toogleDeleteTaskModal(true));
  }, [data._id, dispatch]);


  const closeModal = useCallback(() => {
    dispatch(toogleDeleteTaskModal(false));
  }, [dispatch]);

  const deleteTaskHandler = () => {
    if (boardId) {
      dispatch(deleteTask({ boardId, columnId, taskId: currentTask }));
    }

    closeModal();
  };

  return (
    <TaskBlock ref={ref} style={{ opacity }} onClick={() => onClick(data)}>
      {title}
      <RemoveBtn onClick={() => deleteTaskModalOpen()}>x</RemoveBtn>
      {
        isTaskDeleteModalOpen && 
        <DeleteModal
          isOpened={isTaskDeleteModalOpen}
          dispatch={deleteTaskHandler}
          closeModal={closeModal}
        />
      }
    </TaskBlock>
  );
};

