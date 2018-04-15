import React from 'react';

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
            <i className="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
