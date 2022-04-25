import React from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import Input from '../Input';
import { LOG_IN_SHEMA } from '../../../utils/validationShemas';
import styles from '../Forms.module.css';

const LogInForm = (props) => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', isSaveData: false }}
        validationSchema={LOG_IN_SHEMA}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className={cx(styles['form-container'])}>
            {props.children}
            <Input name="email" type="text" placeholder="Email address" />
            <Input name="password" type="password" placeholder="Password" />
            <div className={cx(styles['form-enterance-settings'])}>
              <label className={cx(styles['checkbox-field'])}>
                <Field name="isSaveData" type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className={cx(styles['form-submit'])}>
              LOGIN
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LogInForm;
