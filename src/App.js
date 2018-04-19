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
import ChannelNavLink from './components/ChannelNavLink';
import AddChannel from './components/AddChannelForm';
import RecieveMessages from './components/chat';
import SendMessage from './components/SendMessage';



function App(props) {
  const authStore = props.authStore;
  const channelStore =props.channelStore;
  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore}
              channelStore={channelStore}

      />
   <Switch>
          <Route path='/channels/:name'
                     render={
                       props => <RecieveMessages {...props} channel={channelStore.getChannelByName(props.name)} authStore={authStore} channelStore={channelStore}/>
                     }/>



      </Switch>

      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <AddChannel authStore={authStore}
              channelStore={channelStore}/>
      <SendMessage authStore={authStore}
              channelStore={channelStore}/>

      <Footer />
    </div>
  );
}

export default withRouter(observer(App));
