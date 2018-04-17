import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {observer} from 'mobx-react';


// Components
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';
import CreateChannel from './components/createChannelModal';
import AddChannel from './components/AddChannelForm';

function App(props) {
  const authStore = props.authStore;
  const channelStore =props.channelStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore}
              channelStore={channelStore}
      />
    
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <AddChannel channelStore={channelStore}/>
     
      <Footer />
    </div>
  );
}

export default App;
