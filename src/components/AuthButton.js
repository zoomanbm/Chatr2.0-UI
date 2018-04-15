import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

// Fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus';

function AuthButton(props) {
  const authStore = props.authStore;
  return authStore.isLoggedIn ?
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </li>
    </ul> :
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/signup">
          <FontAwesomeIcon icon={faUserPlus} /> Signup
        </Link>
      </li>
    </ul>
}

export default observer(AuthButton);
