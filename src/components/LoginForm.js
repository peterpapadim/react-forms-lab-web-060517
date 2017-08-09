import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  userNameEntry = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordEntry = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
        this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
            id="test-username" type="text" value={this.state.username} onChange={this.userNameEntry}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordEntry} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
