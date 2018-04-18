import React, {Component} from 'react';
import axios from 'axios';
import channelStore from '../stores/channelStore';
import authStore from '../stores/authStore';
import {observer} from 'mobx-react';


function RecieveMessages(props) {
  const name = props.match.params.name;
  const channel =props.channelStore.getChannelByName(name);
  const authStore = props.authStore;
  console.log(authStore.token)


    const messages = props.channelStore.messages.map(
      message => <div className="card"  key={channel.user}>


  <div className="card-body">
    <h5 className="btn btn-primary">  {message.username}:</h5>
    <p className="card-text"> {message.message}</p>
    <p className="ard-text"> {message.timestamp}</p>
  </div>
</div>
    )
  return (
    <div className ="col-4">
  {messages}

    </div>
  )
}



export default observer(RecieveMessages) ;
