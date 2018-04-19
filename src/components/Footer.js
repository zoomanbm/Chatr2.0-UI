import React from 'react';
import SendMessage from './SendMessage';
import authStore from '../stores/authStore';
import channelStore from '../stores/channelStore';

function Footer(props) {
  return (
    <footer className="sticky-footer">
      <div className="container">
          <div className="float" >
        <SendMessage authStore={authStore}
                channelStore={channelStore}/>
              </div>
        <div className="text-center">
          <small>Copyright © CODED Chatr 2018</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
