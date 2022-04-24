import React from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import Input from '../Input';
import { LOG_IN_SHEMA } from '../../../utils/validationShemas';
import styles from '../Forms.module.css';

const LogInForm = (props) => {
  // const setWithExpiry = (key, value, expiration) => {
  //   const now = new Date();
  //   const item = {
  //     value: { email: value.email, password: value.password },
  //     expiry: now.getTime() + expiration,
  //   };
  //   localStorage.setItem(key, JSON.stringify(item));
  // };

  return (
    <>
      {props.children}
      <Formik
        initialValues={{ email: '', password: '', isSaveData: false }}
        validationSchema={LOG_IN_SHEMA}
        onSubmit={(values) => {
          console.log(values);
          // if saveData checked save data to local storage
          // if (values.isSaveData) {
          //   setWithExpiry(values);
          // }
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className={cx(styles['form-container'], styles['log-in'])}>
            <Input name="email" type="text" placeholder="Email address" />
            <Input name="password" type="password" placeholder="Password" />
            <div>
              <label>
                <Input name="isSaveData" type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">LOGIN</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LogInForm;
