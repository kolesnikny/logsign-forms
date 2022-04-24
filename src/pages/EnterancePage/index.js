import React, { Component } from 'react';
import FormHeader from '../../components/Forms/FormHeader';
import LogInForm from '../../components/Forms/LogInForm';
import SignUpForm from '../../components/Forms/SignUpForm';
import styles from './EnterancePage.module.css';

class EntrancePage extends Component {
  constructor(props) {
    super(props);
    // isNewUser false === signup
    // true === login
    this.state = {
      isNewUser: false,
    };
  }

  changeIsNewUser = () => {
    this.setState({
      isNewUser: !this.state.isNewUser,
    });
  };

  LogInForm = () => {
    return <div />;
  };

  render() {
    const wrapperForm = this.state.isNewUser ? (
      <>
        <SignUpForm>
          <h3>CREATE AN ACCOUNT</h3>
          <p>We always keep your name and email address private.</p>
        </SignUpForm>
      </>
    ) : (
      <>
        <LogInForm>
          <h3>LOGIN TO YOUR ACCOUNT</h3>
        </LogInForm>
      </>
    );

    return (
      <div className={styles['enterance-container']}>
        <FormHeader
          link={this.state.isNewUser}
          changeLink={this.changeIsNewUser}
        />
        {wrapperForm}
      </div>
    );
  }
}

export default EntrancePage;
