import axios from 'axios';
import {decorate, observable, computed} from 'mobx';
import AuthStore from './authStore';


class ChannelStore {

	constructor(){
		this.channels =[];
		this.loading =true;
		this.messages =[];
		this.message='';
		this.currentId=null;

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


	getChannelByName(name) {
	    return this.channels.find(channel => channel.name == name);
	  }


	fetchMessages(id, token){
		return axios.get(`http://192.168.100.54/channels/${id}/`,
	      {headers: {Authorization:`JWT ${token}`}})
			.then(res=> res.data)
			.then(messages=> {
				this.messages =messages;
				this.loading = false;
				console.log(messages);
			})
			.catch(err=> console.error(err));
		}



	sendMessage(message,id, token){
		return axios.post(`http://192.168.100.54/channels/${id}/send/`, 
		 {message:message},
		 {headers: {Authorization:`JWT ${token}`}})
			.then(()=>this.fetchMessages(id, token))
			.catch(function (error) {
				console.log(error.response);
			  });
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
	messages:observable,
	message:observable,
	currentId:observable,
	loading:observable,
})


const channelStore = new ChannelStore()
channelStore.fetchChannels();

export default channelStore;
