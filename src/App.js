// import logo from './logo.svg';
// import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

const App = ({ signOut, user }) => {
  return (
    <div>
      { user.attributes.email }
      
      <button onClick={ signOut }>Click to Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
