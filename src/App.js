import React from 'react';

// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';

function App(props) {
  const authStore = props.authStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore}/>
      <LogoutModal authStore={authStore}/>
    </div>
  );
}

export default App;
