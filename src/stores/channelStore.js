import axios from 'axios';
import {decorate, observable, computed} from 'mobx';
import AuthStore from './authStore';


class ChannelStore {

	constructor(){
		this.channels =[];
		this.loading =true;
	}

	CreateChannel() {
    return this.storeChannel('createChannel');
  } 

	fetchChannels(){
		return axios.get('http://192.168.100.54/channels/')
		.then(res=> res.data)
		.then(channels=> {
			this.channels =channels;
			this.loading = false;
			console.log(channels);




		})
		.catch(err=> console.error(err));
	}


	storeChannel(name, token) {
    return axios.post('http://192.168.100.54/channels/create/', {
      name: name},{
      headers: {Authorization:`JWT ${token}`}
    	})
     .then(()=>this.fetchChannels())
  .catch(function (error) {
    console.log(error);
  });
    


}
}


decorate(ChannelStore, {
	channels:observable,
	loading:observable,
})


const channelStore = new ChannelStore()
channelStore.fetchChannels();

export default channelStore;