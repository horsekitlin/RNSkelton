import React from 'react';
import { View } from 'react-native';
import { IconButton, List, Checkbox } from 'react-native-paper';

const TaskItem = (props) => {
  const { id, index, tabIndex, isCompleted, handleUpdateTask } = props;
  const completedPayload = {
    index,
    tabIndex,
    taskId: id,
    isCompleted: !isCompleted,
  };
  return (
    <List.Item
      title={props.title}
      left={() => (
        <Checkbox.Item
          mode="android"
          label=""
          status={props.isCompleted ? 'checked' : 'unchecked'}
          onPress={() => handleUpdateTask(completedPayload)}
        />
      )}
      right={() => (
        <View style={{ flexDirection: 'row' }}>
          {/* <IconButton
            mode="text"
            icon="star"
            onPress={() => console.log('star')}
          /> */}
          <IconButton
            mode="contained"
            icon="lead-pencil"
            onPress={() => props.navigation.navigate("CreateTask", { index, tabIndex, mode: "updated", taskId: id })}
          />
        </View>
      )}
    />
  );
};

export default TaskItem;
