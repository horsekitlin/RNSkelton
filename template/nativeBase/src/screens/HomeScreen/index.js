import { connect } from 'react-redux';
import { addTaskAction, deleteTaskAction, updateTaskAction } from '~/actions/taskActions';
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
  handleUpdateTask: payload => {
    dispatch(updateTaskAction(payload));
  },
  handleDeleteTask: payload => {
    dispatch(deleteTaskAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);