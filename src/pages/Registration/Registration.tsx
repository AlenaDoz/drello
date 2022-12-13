import React, { useCallback, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { registrationSchema } from '../../validation/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpForm } from '../../types/interfaces';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { ROUTES } from '../../constants/constants';
import { Form } from '../../components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Loading } from '../../components/Loading/Loading';
import { Alert } from '../../components/Alert/Alert';
import {
  ButtonSubmit,
  LinkFormWrapper,
  NavLinkForm,
} from '../../components/Form/styles';
import { userRegistration } from '../../store/userSlice/userActions';
import { useTranslation } from 'react-i18next';

const Registration: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'authPages' });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(registrationSchema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    setIsAlertOpen(true);
    dispatch(userRegistration(data));
    reset();
  };

  const handleCloseAlert = useCallback(() => {
    setIsAlertOpen(false);
  }, []);

  return (
    <>
      <Form title={t('titleRegistration')} onSubmit={handleSubmit(onSubmit)}>
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
        <LinkFormWrapper>
          <span>{t('linkRegistration')}</span>
          <NavLinkForm to={ROUTES.signIn}>{t('titleLogin')}</NavLinkForm>
        </LinkFormWrapper>
        <ButtonSubmit>{t('titleRegistration')}</ButtonSubmit>
      </Form>
      {isLoading ? (
        <Loading />
      ) : (
        <Alert
          message={errorMessage ?t('errorRegistration'):t('successRegistration')}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};

export default Registration;
