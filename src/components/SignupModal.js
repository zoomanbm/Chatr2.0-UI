import React from 'react';

// Components
import Modal from './Modal';
import RegistationForm from './RegistrationForm';

function SignupModal(props) {
  const authStore = props.authStore;
  const body = <RegistationForm target="#loginModal"
                  alternateLinkText="login with an existing account"
                  authStore={authStore} />;
  const modalProps = {
    id: 'signupModal',
    title: 'Register an account',
    body: body,
    clickHandler: () => {authStore.signup()},
    type: 'Signup'
  }
  return <Modal {...modalProps} />;
}

export default SignupModal;
