import HomeScene from '../components/HomeScene';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeScene)
);
