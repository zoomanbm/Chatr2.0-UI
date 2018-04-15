import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar';

function App(props) {
  const authStore = props.authStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore}/>
    </div>
  );
}

export default App;
