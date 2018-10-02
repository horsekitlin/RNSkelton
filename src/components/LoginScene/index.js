import React from 'react';
import propTypes from "prop-types";

const initState = {
  email: '',
  password: '',
  keepLogin: true,
  emailErr: false,
  emailErrMsg: '',
  passwordErr: false,
  passwordErrMsg: ''
};

export default class Login extends React.Component {
  static propTypes = {
    handleLogin: propTypes.func.isRequired,
    user: propTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = initState;
  }

  reset = () => this.setState(initState);

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, keepLogin } = this.state;
    const payload = { email, password, keepLogin };
    this.props.handleLogin(payload);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>登入</legend>
        <label>信箱</label>
        <input
          type="email"
          name="email"
          placeholder="您的Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
      
        <label>密碼</label>
        <input
          type="password"
          name="password"
          placeholder="您的密碼"
          value={this.state.password}
          onChange={this.handleInputChange} />
        <input type="submit" value='登入' />
      </form>
    );
  }
};
