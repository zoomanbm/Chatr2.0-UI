import React, {Component} from 'react';
import axios from 'axios';
import channelStore from '../stores/channelStore';
import authStore from '../stores/authStore';
import {observer} from 'mobx-react';
import Timestamp from 'react-timestamp';


function RecieveMessages(props) {
  const name = props.match.params.name;
  const channel =props.channelStore.getChannelByName(name);
  const authStore = props.authStore;
  console.log(authStore.token)


    const messages = props.channelStore.messages.map(
      message => 
      <div>
        <div class="card" key={channel.user}>
          <div class="card-header">
            {message.username}
          </div>
          <div class="card-body">
            <h5 class="card-title">{message.message}</h5>
            <Timestamp class="card-subtitle mb-2 text-muted" time={message.timestamp} precision={3}>{message.timestamp}></Timestamp>
          </div>
        </div>
        <br></br>
      </div>
      
    )
  return (
    <div className ="col-12">
        {messages}
    </div>
  )
}



export default observer(RecieveMessages) ;


