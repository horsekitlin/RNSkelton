import AuthWrapper from '../components/common/AuthWrapper';
import {handleSidebar} from "../actions/settings";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = ({ user, settings }) => ({
  user,
  settings
});

const mapDispatchToProps = dispatch => ({
  handleSidebar: payload => dispatch(handleSidebar(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthWrapper));

