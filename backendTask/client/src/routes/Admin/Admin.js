import React from 'react';
import Paper from 'material-ui/Paper';

import InviteForm from '../../components/InviteForm';

const Admin = props => (
  <div className="h-100">
    <div style={{ height: '10%' }} className="black">
      Send Invite to interviewees
    </div>
    <div
      style={{ height: '90%' }}
      className="h-90 flex justify-center items-center">
      <Paper>
        <InviteForm />
      </Paper>
    </div>
  </div>
);

export default Admin;
