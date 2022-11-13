import React from 'react';
import { FormRegistration, Title } from './styles';
import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import {
  loginValidation,
  nameValidation,
  passwordValidation,
} from '../../validation/validation';
import { ISignUpForm } from '../../types/interfaces';
import { InputAuth } from '../../components/InputAuth/InputAuth';
import { ButtonSubmit } from '../../components/ButtonSubmit/ButtonSubmit';

export const Registration: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<ISignUpForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    reset();
  };

  return (
    <div>
      <Title>Регистрация</Title>
      <FormRegistration onSubmit={handleSubmit(onSubmit)}>
        <InputAuth
          control={control}
          name="name"
          rules={nameValidation}
          label="Имя"
          type="text"
          error={!!errors.name?.message}
          helperText={errors?.name?.message}
        />
        <InputAuth
          control={control}
          name="login"
          rules={loginValidation}
          label="Логин"
          type="text"
          error={!!errors.login?.message}
          helperText={errors?.login?.message}
        />
        <InputAuth
          control={control}
          name="password"
          rules={passwordValidation}
          label="Пароль"
          type="password"
          error={!!errors.password?.message}
          helperText={errors?.password?.message}
        />
        <ButtonSubmit>Регистрация</ButtonSubmit>
      </FormRegistration>
    </div>
  );
};
