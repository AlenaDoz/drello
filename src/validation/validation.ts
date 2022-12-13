import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required('validation.require')
    .matches(/^[a-zA-Z]+$/, 'validation.latinName')
    .min(2, 'validation.minName'),
  login: yup
    .string()
    .required('validation.require')
    .matches(/^[a-zA-Z]+$/, 'validation.latinLogin')
    .min(2, 'validation.minLogin'),
  password: yup
    .string()
    .min(6, 'validation.minPassword')
    .required('validation.require'),
});

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required('validation.require')
    .matches(/^[a-zA-Z]+$/, 'validation.latinLogin')
    .min(2, 'validation.minLogin'),
  password: yup
    .string()
    .min(6, 'validation.minPassword')
    .required('validation.require'),
});
