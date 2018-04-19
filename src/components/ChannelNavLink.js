import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHashtag from '@fortawesome/fontawesome-free-solid/faHashtag'

function ChannelNavLink(props) {
  return (
    <li link to={'http://192.168.100.54/channels/${props.channel.id}'} className="nav-item" data-toggle="tooltip" data-placement="right" title={props.channel.name}>
      <NavLink className="nav-link" to={`/channels/${props.channel.name}`} 
      onClick={
      	() => {
      		props.channelStore.currentId = props.channel.id;
      		props.channelStore.fetchMessages(props.channel.id, props.authStore.token)
      	}
      }
      >
        <FontAwesomeIcon icon={faHashtag} />
        <span className="nav-link-text"> {props.channel.name}</span>
      </NavLink>
    </li>
  );
}

export default ChannelNavLink;
