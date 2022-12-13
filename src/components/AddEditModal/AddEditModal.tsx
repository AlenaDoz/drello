import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IAddEditModal } from '../../types/interfaces';
import {
  BoardOverlay,
  BoardWindow,
  ButtonBlock,
  ButtonCancel,
  ButtonContinue,
  CreateBoard,
  InputDescription,
  InputName,
} from './styles';

interface IAddBoard {
  title: string;
  titleValue?: string;
  descrValue?: string;
  description?: boolean;
  isOpened: boolean;
  closeModal: () => void;
  dispatch: Function;
}

export const AddEditModal: React.FC<IAddBoard> = ({
  title,
  titleValue,
  descrValue,
  description,
  isOpened,
  closeModal,
  dispatch,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'addEditModal' });
  const defaultValues: IAddEditModal = { title: titleValue ? titleValue : '' };

  if (description) {
    defaultValues.description = descrValue ? descrValue : '';
  }
  
  const { register, handleSubmit, reset } = useForm({ defaultValues });

  const createModalClose = () => {
    closeModal();
    reset()
  };

  const clickHandler: SubmitHandler<IAddEditModal> = (data: IAddEditModal) => {
    dispatch(data);
    reset();
  };

  return (
    <BoardOverlay
      open={isOpened}
      onClose={createModalClose}
      disableAutoFocus={true}
    >
      <form onSubmit={handleSubmit(clickHandler)}>
        <BoardWindow>
          <CreateBoard>{t(`${title}`)}</CreateBoard>
          <InputName
            {...register('title', { required: true })}
            type='text'
            placeholder={t('name')}
          />
          {description && (
            <InputDescription
              {...register('description', { required: true })}
              placeholder={t('description')}
            />
          )}
          <ButtonBlock>
            <ButtonContinue type='submit'>{t('continue')}</ButtonContinue>
            <ButtonCancel type='button' onClick={createModalClose}>
              {t('cancel')}
            </ButtonCancel>
          </ButtonBlock>
        </BoardWindow>
      </form>
    </BoardOverlay>
  );
};
