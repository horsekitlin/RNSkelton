import React from 'react';
import propTypes from "prop-types";
import { checkEmail, checkPassword } from '../../utils/formCheck';
import {
  Header,
  Button,
  Form,
  Label,
  Message,
  Segment
} from 'semantic-ui-react';
import FormBlock  from '../common/FormBlock';

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

  isValidFormat(name, value) {
    switch (name) {
      case 'email':
        this.setState(checkEmail(value));
        break;
      case 'password':
        this.setState(checkPassword(value));
        break;
      default:
        break;
    }
  }

  handleCheckBoxChange = () => {
    this.setState(prevState => {
      return { keepLogin: !prevState.keepLogin };
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.isValidFormat(name, value);
  }

  handleSubmit = () => {
    // console.log(this.state.email, ' ', this.state.password);
    const { email, password, keepLogin } = this.state;
    const payload = { email, password, keepLogin };
    this.props.handleLogin(payload);
    this.reset();
  };

  handleForgotPasswordBtnClick = () => this.props.handleClearForgotPassword();

  disabledBtn = () =>
    this.state.emailErr ||
    this.state.passwordErr ||
    (this.state.email === '' || this.state.password === '');

  emailField = () => (
    <Form.Field>
      <label>信箱</label>
      <input
        type="email"
        name="email"
        placeholder="您的Email"
        value={this.state.email}
        onChange={this.handleInputChange}
      />
      {this.state.emailErr && (
        <Label basic color="red" pointing>
          {this.state.emailErrMsg}
        </Label>
      )}
    </Form.Field>
  );

  passwordField = () => (
    <Form.Field>
      <input
        type="password"
        name="password"
        placeholder="您的密碼"
        value={this.state.password}
        onChange={this.handleInputChange}
      />
      {this.state.passwordErr && (
        <Label basic color="red" pointing>
          {this.state.passwordErrMsg}
        </Label>
      )}
    </Form.Field>
  );

  errMsg = () => (
    <Message
      error
      icon="warning circle"
      header={this.props.user.login.message}
      content="請確認輸入無誤後再嘗試登入"
    />
  );

  render() {
    return (
      <FormBlock>
        <Segment>
          <Header as="h1">登入</Header>
          <div>
            <Form
              onSubmit={this.handleSubmit}
              loading={this.props.isFetching}
              error={this.props.user.login.err}
            >
              {this.emailField()}
              {this.passwordField()}
              {this.errMsg()}
              <Button
                type="submit"
                fluid
                color="yellow"
                disabled={this.disabledBtn()}
              >
                登入
              </Button>
            </Form>
          </div>
        </Segment>
      </FormBlock>
    );
  }
};
