import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from '../../components/Alert/Alert';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { Form } from '../../components/Form/Form';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { Loading } from '../../components/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteUser, updateUser } from '../../store/userSlice/userActions';
import { ISignUpForm } from '../../types/interfaces';
import { parseJWT } from '../../utils/utils';
import { registrationSchema } from '../../validation/validation';
import { ButtonDelete, ButtonUpdate, UpdateButtonsWrapper } from './styles';

const EditProfile: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'authPages' });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(registrationSchema),
  });
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    const token = localStorage.getItem('token') as string;
    const { id } = parseJWT(token);
    dispatch(updateUser({ id, data }));
    setIsAlertOpen(true);
    reset();
  };

  const handleCloseAlert = useCallback(() => {
    setIsAlertOpen(false);
  }, []);

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const deleteProfile = useCallback(() => {
    const token = localStorage.getItem('token') as string;
    const { id } = parseJWT(token);
    dispatch(deleteUser(id));
  }, [dispatch]);

  // const setModal = useCallback((isOpen: boolean) => {
  //   setOpenModal(isOpen);
  // }, []);

  return (
    <>
      <Form title={t('titleEditProfile')} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='name'
          render={({ field: { value, onChange } }) => (
            <InputAuth
              onChange={onChange}
              value={value || ''}
              label={t('name')}
              type='text'
              error={!!errors.name?.message}
              helperText={
                errors?.name?.message
                  ? t(`${errors?.name?.message}`)
                  : undefined
              }
            />
          )}
        />
        <Controller
          control={control}
          name='login'
          render={({ field: { value, onChange } }) => (
            <InputAuth
              onChange={onChange}
              value={value || ''}
              label={t('login')}
              type='text'
              error={!!errors.login?.message}
              helperText={
                errors?.login?.message
                  ? t(`${errors?.login?.message}`)
                  : undefined
              }
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { value, onChange } }) => (
            <InputAuth
              onChange={onChange}
              value={value || ''}
              label={t('password')}
              type='password'
              error={!!errors.password?.message}
              helperText={
                errors?.password?.message
                  ? t(`${errors?.password?.message}`)
                  : undefined
              }
            />
          )}
        />
        <UpdateButtonsWrapper>
          <ButtonDelete onClick={openModal}>{t('deleteButton')}</ButtonDelete>
          <ButtonUpdate>{t('titleEditProfile')}</ButtonUpdate>
        </UpdateButtonsWrapper>
      </Form>
      <DeleteModal
        isOpened={isOpenModal}
        closeModal={closeModal}
        dispatch={deleteProfile}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Alert
          message={errorMessage || `Пользователь успешно изменён`}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};

export default EditProfile;
