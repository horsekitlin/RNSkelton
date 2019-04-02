import Home from '../screens/HomeScreen';
import { connect } from 'react-redux';

const mapStateToProps = ({ user, route }) => ({
  user,
  route
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

