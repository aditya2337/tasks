import React from 'react';

const AuthFailed = props => (
  <section className="flex items-center flex-column justify-center h-100 bg-washed-blue">
    <header className="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l w-100 tc code mb3 fw9 dib tracked-tight light-purple">
        Authentication failed
      </h1>
      <h2 className="tc f1-l fw1">
        The email account and the token did not match
      </h2>
    </header>
  </section>
);

export default AuthFailed;
