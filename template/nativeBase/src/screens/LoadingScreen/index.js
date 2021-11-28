import { connect } from 'react-redux';
import LoadingScreen from './view';

const mapStateToProps = ({setting}) => {
  const {fetchingTypes} = setting;
  const keys = Object.keys(fetchingTypes);
  return {
    isOpen: keys.length !== 0,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
