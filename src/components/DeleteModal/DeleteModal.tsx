import {
  BoardOverlay,
  BoardWindow,
  ButtonContinue,
  ButtonCancel,
  ButtonBlock,
  DeleteImg,
  DelBoard,
} from './style';
import Image from '../../assets/images/warning.png';
import { useTranslation } from 'react-i18next';

interface IProps {
  isOpened: boolean;
  closeModal: () => void;
  dispatch: () => void;
}

const DeleteModal = ({ isOpened, dispatch, closeModal }: IProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'deleteModal' });
  const handleCancelClick = () => {
    closeModal();
  };

  const handleContinueClick = () => {
    dispatch();
  };

  return (
    <BoardOverlay
      open={isOpened}
      onClose={handleCancelClick}
      disableAutoFocus={true}
    >
      <BoardWindow>
        <DeleteImg src={Image} alt='warning' />
        <DelBoard>{t('title')}</DelBoard>
        <ButtonBlock>
          <ButtonContinue onClick={handleContinueClick}>{t('delete')}</ButtonContinue>
          <ButtonCancel onClick={handleCancelClick}>{t('cancel')}</ButtonCancel>
        </ButtonBlock>
      </BoardWindow>
    </BoardOverlay>
  );
};

export default DeleteModal;
