import axios from 'axios';
import {decorate, observable, computed} from 'mobx';


class ChannelStore {
	constructor(){
		this.channels =[];
		this.loading =true;
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




}


decorate(ChannelStore, {
	channels:observable,
	loading:observable,
})


const channelStore = new ChannelStore()
channelStore.fetchChannels();

export default channelStore;