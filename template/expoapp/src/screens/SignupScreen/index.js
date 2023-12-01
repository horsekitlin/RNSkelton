import { connect } from 'react-redux';
import SignupScreen from './view';
import { signupAction } from '~/actions/authActions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  handleSignup: payload => {
    dispatch(signupAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);