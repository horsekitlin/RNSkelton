import { connect } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import { initialAppAction } from '../actions/settingActions';

const mapStateToProps = ({auth, setting}) => ({
  isAuth: auth.get('isAuth'),
  isInitialed: setting.get('isInitialed'),
});

const mapDispatchToProps = dispatch => ({
  handleInitialApp: payload => {
    dispatch(initialAppAction(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
