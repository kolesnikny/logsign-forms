import React from 'react';
import { Formik, Form, Field } from 'formik';
import Input from '../Input';
import cx from 'classnames';
import { SIGN_UP_SHEMA } from '../../../utils/validationShemas';
import styles from '../Forms.module.css';

const SignUpForm = (props) => {
  return (
    <section>
      {props.children}
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className={cx(styles['form-container'])}>
            <div>
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
              aria-labelledby="sign-up-radio-group"
              className={styles['sign-up-radio-group']}
            >
              <label>
                <Input type="radio" name="role" value="buyer" />
                Join As a Buyer
                <span>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </label>
              <label>
                <Input type="radio" name="role" value="creative" />
                Join As a Creative or Marketplace Seller{' '}
                <span>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </span>
              </label>
            </div>
            <label>
              <Input name="isSubscribe" type="checkbox" />
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </label>
            <button type="submit">Create account</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUpForm;
