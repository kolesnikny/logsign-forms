import * as Yup from 'yup';

export const LOG_IN_SHEMA = Yup.object({
  email: Yup.string()
    .matches(
      /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
      'email is not valid format'
    )
    .required('email is a required field'),
  password: Yup.string().required('password is a required field'),
});

export const SIGN_UP_SHEMA = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z0-9_-]{3,15}$/)
    .required('first name is a required field'),
  lastName: Yup.string()
    .matches(/^[A-Za-z0-9_-]{3,15}$/)
    .required('last name is a required field'),
  displayName: Yup.string()
    .matches(/^[A-Za-z0-9_-]{3,15}$/)
    .required('display name is a required field'),
  email: Yup.string()
    .matches(
      /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
      'email is not valid format'
    )
    .required('email is a required field'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'password must contein...'
    )
    .required('password is a required field'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), 'should be similar the password'])
    .required('password confirmation is a required field'),
  role: Yup.string()
    .oneOf(['creative', 'buyer'])
    .required('Please specify whether you are a Creative or a Buyer'),
});
