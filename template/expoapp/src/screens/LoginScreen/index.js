import { connect } from 'react-redux';
import LoginScreen from './view';
import { signinAction } from "~/actions/authActions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  handleSignIn: payload => {
    dispatch(signinAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);