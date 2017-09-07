import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';

const Layout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="min-h-inherit h-100 w-100">
        <div style={{ backgroundColor: '#ececec' }} className="h-100">
          <div className="min-h-inherit w-100 pt3 pr5 pl5">
            <div className="w-100 flex">
              <div style={{ width: '20%', height: '85vh' }}>
                <Navigation {...rest} {...matchProps} />
              </div>
              <div style={{ width: '80%' }} className="ml3">
                <Component {...matchProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default Layout;
