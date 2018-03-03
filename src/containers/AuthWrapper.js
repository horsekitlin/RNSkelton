import AuthWrapper from '../components/common/AuthWrapper';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthWrapper));

