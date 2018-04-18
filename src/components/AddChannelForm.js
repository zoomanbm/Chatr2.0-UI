import React from 'react';
import {observer} from 'mobx-react';


class AddChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You added a channel: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const channelStore = this.props.channelStore;
    const authStore = this.props.authStore;
    return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Channel</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleSubmit}>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Channel Name</label>
                        <input type="text" class="form-control" value={this.state.value} onChange={this.handleChange}/>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary"  data-dismiss="modal" onClick= {() => channelStore.storeChannel(this.state.value, authStore.token)}>Save</button>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default AddChannel;
