import React from 'react';

// Components
import Modal from './Modal';
import RegistationForm from './RegistrationForm';

function LoginModal(props) {
  const authStore = props.authStore;
  const body = <RegistationForm target="#signupModal"
                  alternateLinkText="register an account"
                  authStore={authStore} />;
  const modalProps = {
    id: 'loginModal',
    title: 'Login to send messages',
    body: body,
    clickHandler: () => {authStore.login()},
    type: 'Login'
  }
  return <Modal {...modalProps} />;
}

export default LoginModal;
