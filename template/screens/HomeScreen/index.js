import { connect } from 'react-redux';
import { addTaskAction } from '~/actions/taskActions';
import HomeScreen from './view';

const mapStateToProps = ({task}) => {
  return {
    tasks: task.list,
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddTask: payload => {
    dispatch(addTaskAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);