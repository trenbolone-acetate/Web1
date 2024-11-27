import React, { Component } from 'react';

class LoginLogout extends Component {
  render() {
    const { isLoggedIn, onLoginLogout } = this.props;

    return (
      <nav>
        <ul>
          <li>
            {isLoggedIn ? (
              <button onClick={onLoginLogout}> Logout</button>
            ) : (
              <button onClick={onLoginLogout}> Login</button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default LoginLogout;
