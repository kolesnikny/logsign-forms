import React, { Component } from 'react';
import Header from '../../components/Header';
import LogInForm from '../../components/Forms/LogInForm';
import SignUpForm from '../../components/Forms/SignUpForm';
import styles from './EnterancePage.module.css';

class EntrancePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isNewUser: false,
    };
  }

  changeIsNewUser = () => {
    this.setState({
      isNewUser: !this.state.isNewUser,
    });
  };

  changeUser = (logUser) => {
    this.setState({ user: logUser });
  };

  LogInForm = () => {
    return <div />;
  };

  render() {
    const wrapperForm = this.state.isNewUser ? (
      <>
        <SignUpForm userChange={this.changeUser}>
          <h3>CREATE AN ACCOUNT</h3>
          <p>We always keep your name and email address private.</p>
        </SignUpForm>
      </>
    ) : (
      <>
        <LogInForm userChange={this.changeUser}>
          <h3>LOGIN TO YOUR ACCOUNT</h3>
        </LogInForm>
      </>
    );

    return (
      <div className={styles['enterance-container']}>
        <Header link={this.state.isNewUser} changeLink={this.changeIsNewUser} />
        {wrapperForm}
      </div>
    );
  }
}

export default EntrancePage;
