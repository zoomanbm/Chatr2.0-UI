import React from 'react';
import {observer} from 'mobx-react';


class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  clearForm(){
    this.setState({value: ""})
  }

  render() {
    const channelStore = this.props.channelStore;
    const authStore = this.props.authStore;
    return (

                <div className="input-group mb-3">
                         <input type="text" className="form-control" placeholder="Write your messge here ..." value={this.state.value} onChange={this.handleChange}/>
                         <div class="input-group-append">
                           <button class="btn btn-outline-secondary" type="button" data-dismiss="input-group"
                           onClick={() => {
                            console.log(this.state)
                            channelStore.sendMessage(this.state.value, channelStore.currentId, authStore.token)
                            this.clearForm()
                          }}>Send</button>
                        </div>
                      </div>
                

    );
  }

}
export default SendMessage;
