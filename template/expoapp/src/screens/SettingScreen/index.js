import { connect } from 'react-redux';
import { signoutAction } from '~/actions/authActions';
import SettingScreen from './view';

const mapStateToProps = ({auth}) => {
  return {
    user: auth.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSignOut: () => {
    dispatch(signoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);