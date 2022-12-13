import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from '../../components/Alert/Alert';
import { Form } from '../../components/Form/Form';
import {
  ButtonSubmit,
  LinkFormWrapper,
  NavLinkForm,
} from '../../components/Form/styles';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { Loading } from '../../components/Loading/Loading';
import { ROUTES } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userLogin } from '../../store/userSlice/userActions';
import { ISignInForm } from '../../types/interfaces';
import { loginSchema } from '../../validation/validation';

const Login: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'authPages' });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(userLogin(data));
    setIsAlertOpen(true);
    reset();
  };

  const handleCloseAlert = useCallback(() => {
    setIsAlertOpen(false);
  }, []);

  return (
    <>
      <Form title={t('titleLogin')} onSubmit={handleSubmit(onSubmit)}>
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
          <span>{t('linkLogin')} </span>
          <NavLinkForm to={ROUTES.registration}>
            {t('titleRegistration')}
          </NavLinkForm>
        </LinkFormWrapper>
        <ButtonSubmit>{t('titleLogin')}</ButtonSubmit>
      </Form>
      {isLoading ? (
        <Loading />
      ) : (
        <Alert
          message={errorMessage || `Добро пожаловать`}
          onClose={handleCloseAlert}
          isOpen={isAlertOpen}
          isError={!!errorMessage}
        />
      )}
    </>
  );
};

export default Login;
