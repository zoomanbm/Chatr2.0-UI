import React from 'react';

// Fontawesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

// Components
import ChannelNavLink from './ChannelNavLink';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: false}
  }

  render () {
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
            <a className="nav-link text-center" id="sidenavToggler"
              onClick={() => this.setState(prevState => {
                return {collapsed: !prevState.collapsed}
              })}>
              <FontAwesomeIcon icon={this.state.collapsed ? faAngleRight : faAngleLeft} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
