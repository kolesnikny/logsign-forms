import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from '../Input';
import cx from 'classnames';
import { SIGN_UP_SHEMA } from '../../../utils/validationShemas';
import styles from '../Forms.module.css';

const SignUpForm = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          displayName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          role: undefined,
          isSubscribe: false,
        }}
        validationSchema={SIGN_UP_SHEMA}
        onSubmit={async (values) => {
          const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          return await response.json();
        }}
      >
        {({ values, errors }) => (
          <Form className={cx(styles['form-container'])}>
            {props.children}
            <div className={cx(styles['sign-in-inputs'])}>
              <Input name="firstName" type="text" placeholder="First name" />
              <Input name="lastName" type="text" placeholder="Last name" />
              <Input
                name="displayName"
                type="text"
                placeholder="Display Name"
              />
              <Input name="email" type="text" placeholder="Email address" />
              <Input name="password" type="password" placeholder="Password" />
              <Input
                name="passwordConfirmation"
                type="password"
                placeholder="Password Confirmation"
              />
            </div>

            <div
              role="group"
              aria-labelledby="role"
              className={styles['sign-up-radio-group']}
              value={values.role}
              error={errors.role}
            >
              <Input
                type="radio"
                name="role"
                value="buyer"
                label={
                  <p>
                    Join As a Buyer
                    <span>
                      I am looking for a Name, Logo or Tagline for my business,
                      brand or product.
                    </span>
                  </p>
                }
                cn="radio-group-label"
              />
              <Input
                type="radio"
                name="role"
                value="creative"
                label={
                  <p>
                    Join As a Creative or Marketplace Seller{' '}
                    <span>
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace.
                    </span>
                  </p>
                }
                cn="radio-group-label"
              />
            </div>

            <label className={cx(styles['checkbox-field'])}>
              <Field name="isSubscribe" type="checkbox" />
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </label>
            <button type="submit" className={cx(styles['form-submit'])}>
              Create account
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
