import Main from '../components/MainScene';
import { connect } from 'react-redux';

const mapStateToProps = ({ user, route }) => ({
  user,
  route
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

