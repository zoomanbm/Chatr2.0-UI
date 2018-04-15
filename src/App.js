import React from 'react';

// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';

function App(props) {
  const authStore = props.authStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore}/>
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
    </div>
  );
}

export default App;
