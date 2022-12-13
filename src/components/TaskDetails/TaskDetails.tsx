import {
  Overlay,
  TaskDetailsDescription,
  TaskDetailsModal,
  TaskDetailsTitle,
} from './style';
import { useAppSelector } from '../../hooks';

interface IProps {
  isOpened: boolean;
  closeModal: () => void;
}

const DeleteModal = ({ isOpened, closeModal }: IProps) => {
  const { taskDetails } = useAppSelector((state) => state.tasks);

  const handleCancelClick = () => {
    closeModal();
  };

  return (
    <Overlay
      open={isOpened}
      onClose={handleCancelClick}
      disableAutoFocus={true}
    >
      <TaskDetailsModal>
        <TaskDetailsTitle>{ taskDetails?.title }</TaskDetailsTitle>
        <TaskDetailsDescription>{ taskDetails?.description }</TaskDetailsDescription>
      </TaskDetailsModal>
    </Overlay>
  );
};

export default DeleteModal;
