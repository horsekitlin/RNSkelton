import { connect } from 'react-redux';
import TaskScreen from './view';
import { getTasksAction, updateTaskAction } from '~/actions/taskActions';

const mapStateToProps = ({auth, task}) => {
  return {
    auth,
    task,
  };
};

const mapDispatchToProps = dispatch => ({
  handleGetTasks: payload => {
    dispatch(getTasksAction(payload));
  },
  handleUpdateTask: payload => {
    dispatch(updateTaskAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen);