import React from 'react';

// Fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';

// Components
import ChannelNavLink from './ChannelNavLink';

function SideNav(props) {
  const channelLinks = [{name: "all"}].map(
    channel => <ChannelNavLink key={channel.name} channel={channel} />
  )
  return (
    <div>
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        {channelLinks}
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
