import { connect } from 'react-redux';
import RootNavigation from '../navigation/RootNavigation';

const mapStateToProps = ({auth, setting}) => {
  return {
    isAuth: auth.get('isAuth'),
    isInitialed: setting.get('isInitialed'),
  }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootNavigation);
