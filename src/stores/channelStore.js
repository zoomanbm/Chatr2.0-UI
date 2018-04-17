import axios from 'axios';
import {decorate, observable, computed} from 'mobx';


class ChannelStore {

	constructor(){
		this.channels =[];
		this.loading =true;
		this.ChannelName = [];
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


	storeChannel(type) {
	const authStore = this.props.authStore;
    return axios.post(`http://localhost:192.168.100.54/${type}/`, {
      ChannelName: this.ChannelName,
      header: authStore.token
    	})
     .then(function (response) {
    console.log(response);
  })
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