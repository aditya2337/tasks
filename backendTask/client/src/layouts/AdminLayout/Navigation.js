import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Room from 'material-ui/svg-icons/action/group-work';
import Contacts from 'material-ui/svg-icons/communication/contacts';

const menuItemStyles = {
  marginBottom: '0.5rem',
  color: '#6B7C93',
  fontSize: '14px'
};

const Navigation = props => (
  <Drawer open>
    <Menu
      disableAutoFocus
      selectedMenuItemStyle={{
        backgroundColor: '#e7ebf0',
        color: '#6B7C93'
      }}
      value={props.path}
      autoWidth={false}
      width="100%"
      listStyle={{ width: '0.01%' }}
      style={{ width: '100%' }}>
      <MenuItem
        value="/"
        primaryText="Send Invite"
        containerElement={<Link to="/" />}
        leftIcon={<Room color="#6B7C93" />}
        style={menuItemStyles}
      />
      <MenuItem
        value="/admin"
        primaryText="Interviewee scores"
        containerElement={<Link to="/" />}
        leftIcon={<Contacts color="#6B7C93" />}
        style={menuItemStyles}
      />
    </Menu>
  </Drawer>
);

export default Navigation;
