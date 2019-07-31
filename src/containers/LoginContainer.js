import { connect } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import { loginAction } from '../actions/authActions';

const mapStateToProps = ({auth}) => ({
  isAuth: auth.get('isAuth')
});

const mapDispatchToProps = dispatch => ({
  handleLogin: payload => {
    dispatch(loginAction(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
