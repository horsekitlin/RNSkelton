import { connect } from 'react-redux';
import CreateTaskScreen from './view';
import { createTaskAction, updateTaskAction } from '~/actions/taskActions';

const mapStateToProps = ({task}) => {
  return {
    taskRows: task.rows,
  };
};

const mapDispatchToProps = dispatch => ({
    handleCreateTask: payload => {
        dispatch(createTaskAction(payload));
    },
    handleUpdateTask: payload => {
      dispatch(updateTaskAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskScreen);