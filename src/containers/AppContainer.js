import App from '../App';
import { handleLogin } from '../actions/user';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
