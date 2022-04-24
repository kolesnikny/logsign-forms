import * as Yup from 'yup';

export const LOG_IN_SHEMA = Yup.object({
  email: Yup.string()
    .matches(
      /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
      'email is not valid format'
    )
    .required(),
  password: Yup.string().required(),
});

export const SIGN_UP_SHEMA = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z0-9_-]{3,15}$/)
    .required(),
  lastName: Yup.string()
    .matches(/^[A-Za-z0-9_-]{3,15}$/)
    .required(),
  displayName: Yup.string()
    .matches(/^[A-Za-z0-9_-]{3,15}$/)
    .required(),
  email: Yup.string()
    .matches(
      /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
      'email is not valid format'
    )
    .required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'password must contein...'
    )
    .required(),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), 'should be similar the password'])
    .required(),
  role: Yup.string()
    .oneOf(
      ['creative', 'buyer'],
      'Please specify whether you are a Creative or a Buyer'
    )
    .required('Please specify whether you are a Creative or a Buyer'),
});
