import LoginScene from '../components/LoginScene';
import { handleLogin } from '../actions/user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: payload => dispatch(handleLogin(payload))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginScene)
);
