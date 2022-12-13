import { useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AddColumnBlock, AddColumnBtn, BoardBlock, BackImage } from './styles';
import { Task } from '../../components/Task/Task';
import { Column } from '../../components/Column/Column';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { NavLink, useParams } from 'react-router-dom';
import {
  swapColumn,
  toogleAddColumnModal,
} from '../../store/columnsSlice/columnsSlice';
import BackImg from '../../assets/images/back-button.png';
import {
  getColumns,
  updateColumn,
} from '../../store/columnsSlice/columnsActions';
import { addTask, getTasks } from '../../store/tasksSlice/tasksActions';
import { AddEditModal } from '../../components/AddEditModal/AddEditModal';
import { IColumn, ITask } from '../../types/interfaces';
import { addColumn } from '../../store/columnsSlice/columnsActions';
import {
  setTaskDetails,
  toogleAddTaskModal,
  toogleTaskDetailsModal,
} from '../../store/tasksSlice/tasksSlice';
import TaskDetails from '../../components/TaskDetails/TaskDetails';
import { parseJWT, swapArray } from '../../utils/utils';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import { Loading } from '../../components/Loading/Loading';
import { ROUTES } from '../../constants/constants';
import { useTranslation } from 'react-i18next';

export const BoardPage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'addEditModal' });
  const { id } = useParams();
  const { columns, isColAddModalOpen, currentColumn, isLoading } =
    useAppSelector((state) => state.columns);
  const { tasks, isTaskAddModalOpen, isTaskDetailsOpen } = useAppSelector(
    (state) => state.tasks
  );
  const dispatch = useAppDispatch();
  const createModalOpen = useCallback(() => {
    dispatch(toogleAddColumnModal(true));
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(toogleAddColumnModal(false));
    dispatch(toogleAddTaskModal(false));
  }, [dispatch]);

  const closeTaskDetails = useCallback(() => {
    dispatch(toogleTaskDetailsModal(false));
  }, [dispatch]);

  const addColumnHandler = useCallback(
    (data: IColumn) => {
      if (id) {
        dispatch(
          addColumn({
            id,
            data: {
              ...data,
              order: columns.length ? columns[columns.length - 1].order + 1 : 1,
            },
          })
        );
        closeModal();
      }
    },
    [closeModal, columns, dispatch, id]
  );

  const addTaskHandler = useCallback(
    (data: ITask) => {
      if (id && currentColumn) {
        const taskCounter = tasks.filter(
          (task) => task.columnId === currentColumn
        ).length;
        const newOrder = taskCounter === 0 ? 0 : taskCounter;
        const userId = parseJWT(localStorage.getItem('token')!).id;

        if (data.title && data.description) {
          data.order = newOrder;
          dispatch(
            addTask({
              boardId: id,
              columnId: currentColumn,
              data: { ...data, userId, users: [userId] },
            })
          );
          closeModal();
        }
      }
    },
    [closeModal, currentColumn, dispatch, id, tasks]
  );

  const openTaskDetails = useCallback(
    (e: MouseEvent, data: ITask) => {
      if (e.currentTarget === e.target) {
        dispatch(setTaskDetails(data));
        dispatch(toogleTaskDetailsModal(true));
      }
    },
    [dispatch]
  );

  const renderItemsForColumn = useCallback(
    (columnId: string) => {
      return tasks
        .filter((task) => task.columnId === columnId)
        .sort((a, b) => a.order - b.order)
        .map((item, i) => (
          <Task
            data={item}
            key={`task-${item._id}`}
            index={i}
            onClick={openTaskDetails}
          />
        ));
    },
    [openTaskDetails, tasks]
  );

  useEffect(() => {
    if (id) {
      dispatch(getColumns(id));
      dispatch(getTasks(id));
    }
  }, [dispatch, id]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      if (active.id !== over.id) {
        dispatch(swapColumn([active.id, over.id]));

        swapArray(columns, active.id as number, over.id as number).forEach(
          (el) => {
            dispatch(
              updateColumn({
                boardId: el.boardId as string,
                columnId: el._id,
                data: {
                  title: el.title,
                  order: el.order,
                },
              })
            );
          }
        );
      }
    }
  };

  return (
    <>
      <NavLink to={ROUTES.boards}>
        <BackImage src={BackImg} alt='SignIn'></BackImage>
      </NavLink>
      <BoardBlock>
        <DndProvider backend={HTML5Backend}>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            autoScroll={false}
          >
            <SortableContext
              items={columns.map((el) => el.order)}
              strategy={horizontalListSortingStrategy}
            >
              {columns.map((column, i) => (
                <Column data={column} key={`column-${i}'}`}>
                  {renderItemsForColumn(column._id)}
                </Column>
              ))}
            </SortableContext>

            <AddColumnBlock>
              <AddColumnBtn onClick={createModalOpen}>
                + {t('addColumn')}
              </AddColumnBtn>
            </AddColumnBlock>
            <AddEditModal
              title={'titleColumnAdd'}
              isOpened={isColAddModalOpen}
              closeModal={closeModal}
              dispatch={addColumnHandler}
            />
            <AddEditModal
              title={'titleTaskAdd'}
              description={true}
              isOpened={isTaskAddModalOpen}
              closeModal={closeModal}
              dispatch={addTaskHandler}
            />
            {isTaskDetailsOpen && (
              <TaskDetails
                isOpened={isTaskDetailsOpen}
                closeModal={closeTaskDetails}
              />
            )}
            {isLoading && <Loading />}
          </DndContext>
        </DndProvider>
      </BoardBlock>
    </>
  );
};
