import React from 'react';
import {observer} from 'mobx-react';

// Components
import SideNav from './SideNav';
import AuthButton from './AuthButton';
import channelStore from '../stores/channelStore';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <a className="navbar-brand" href="index.html">Chatr2.0</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">

       <SideNav channelStore={props.channelStore} authStore={props.authStore}/>

        <ul className="navbar-nav ml-auto">
          <span className="navbar-text">
            {props.authStore.currentUser}
          </span>
          <AuthButton authStore={props.authStore} />
        </ul>
      </div>
    </nav>
  );
}

export default observer(NavBar);
