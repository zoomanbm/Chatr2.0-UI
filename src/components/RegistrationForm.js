import React from 'react';
import {observer} from 'mobx-react';

function RegistationForm(props) {
  const authStore = props.authStore;
  return (
    <div>
      <form>
        <div className="form-group">
          <input className="form-control"
            type="text"
            placeholder="Username"
            value={authStore.username}
            onChange={(e) => authStore.username = e.target.value}/>
        </div>
        <div className="form-group">
          <input className="form-control"
            type="password"
            placeholder="Password"
            value={authStore.password}
            onChange={(e) => authStore.password = e.target.value}/>
        </div>
      </form>
      <div className="text-center">
        <button className="mx-auto mt-3 btn btn-small btn-link"
          data-dismiss="modal"
          data-toggle="modal"
          data-target={props.target}>
          {props.alternateLinkText}
        </button>
      </div>
    </div>
  );
}

export default observer(RegistationForm);
