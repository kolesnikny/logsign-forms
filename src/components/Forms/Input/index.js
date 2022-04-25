import { Field } from 'formik';
import cx from 'classnames';
import styles from './Input.module.css';

const Input = ({ name, ...rest }) => {
  return (
    <label className={cx(styles['input-container'])}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.invalidInput]: meta.touched && meta.error,
          });
          return (
            <label>
              <input {...field} className={classNames} {...rest}></input>
              {meta.touched && meta.error && (
                <div className={styles.errorMessage}>{meta.error}</div>
              )}
            </label>
          );
        }}
      </Field>
    </label>
  );
};

export default Input;
