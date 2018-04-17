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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Channel Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddChannel;
