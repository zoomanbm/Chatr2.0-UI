import React from 'react';
import {observer} from 'mobx-react';
import AddChannel from './AddChannelForm';

// Components
import ChannelModal from './ChannelModal';



function CreateChannel(props) {
  const authStore = props.authStore;
  const channelStore = props.channelStore;
  const body = <AddChannel channelStore={channelStore} />;

  const Create = () => {
    const thisModal = window.$('#CreateChannel')
    authStore.isLoggedIn()
      .then(() => !authStore.error.length && thisModal.modal('toggle'));
  };

  const modalProps = {
    id: 'CreateChannel',
    title: 'Create Channel',
    body: body,
    clickHandler: Create,
    channelStore: channelStore,
    type: 'Create Channel'
  }
  return <ChannelModal {...modalProps} />;
}

export default observer(CreateChannel);
