import React, { Component } from 'react';
import FormHeader from '../../components/Forms/FormHeader';
import LogInForm from '../../components/Forms/LogInForm';
import SignUpForm from '../../components/Forms/SignUpForm';
import style from './EnterancePage.module.css';

class EntrancePage extends Component {
  constructor(props) {
    super(props);
    //isNewUser false === signup
    //true === login
    this.state = {
      isNewUser: false,
    };
  }

  changeIsNewUser = () => {
    this.setState({
      isNewUser: !this.state.isNewUser,
    });
  };

  render() {
    const wrapperForm = this.state.isNewUser ? <SignUpForm /> : <LogInForm />;
    return (
      <div className={style['enterance-container']}>
        <FormHeader
          link={this.state.isNewUser}
          changeLink={this.changeIsNewUser}
        ></FormHeader>
        {wrapperForm}
      </div>
    );
  }
}

export default EntrancePage;
