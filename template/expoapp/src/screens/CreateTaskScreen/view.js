import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import Background from '~/components/Background';
import Button from '~/components/Button';
import TextInput from '~/components/TextInput';
import { validate } from '~/utils/yupHelper';

const taskSchema = yup.object().shape({
  title: yup.string().required('Title Not be Empty'),
  comment: yup.string().required('Title Not be Empty'),
  deadlineAt: yup.date().nullable(),
})

const CreateTaskScreen = (props) => {
  const [state, setState] = useState({
    title: '',
    comment: '',
    deadlineAt: null,
    errors: {},
  });

  const { route, taskRows } = props;
  const { params } = route;
  const { index, tabIndex, mode, taskId } = params;
  const isUpdatedMode = mode === 'updated'
  useEffect(() => {
    if (isUpdatedMode) {
      const taskItem = taskRows.find(item => item.id === taskId);
      setState({
        ...state,
        title: taskItem.title,
        comment: taskItem.comment,
        deadlineAt: isEmpty(taskItem.deadlineAt) ? null : new Date(taskItem.deadlineAt),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Background containerStyle={styles.containerStyle}>
      <View style={styles.row}>
        <TextInput
          label="Title"
          returnKeyType="next"
          value={state.title}
          onChangeText={(text) => setState({ ...state, title: text })}
          error={!isEmpty(state.errors.title)}
          errorText={state.errors.title}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          label="comment"
          returnKeyType="next"
          value={state.comment}
          onChangeText={(text) => setState({ ...state, comment: text })}
          error={!isEmpty(state.errors.comment)}
          errorText={state.errors.comment}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.row}>
        <DatePickerInput
          locale="en"
          label="Due Date"
          value={state.deadlineAt}
          onChange={(d) => setState({ ...state, deadlineAt: d })}
          inputMode="start"
        />
      </View>
      <View style={styles.row}>
        <Button mode="contained" onPress={() => {
          const validation = validate(taskSchema, state);

          if (validation.isValid) {
            if (isUpdatedMode) {
              props.handleUpdateTask({
                index,
                tabIndex,
                taskId,
                title: state.title,
                comment: state.comment,
                deadlineAt: state.deadlineAt,
                message: '編輯任務成功',
                onSuccess: () => props.navigation.navigate('Task'),
              });
            } else {
              props.handleCreateTask({
                title: state.title,
                comment: state.comment,
                deadlineAt: state.deadlineAt,
                message: '建立任務成功',
                onSuccess: () => props.navigation.navigate('Task'),
              });
              setState({ ...state, errors: {} });
            }
            return;
          }
          setState({ ...state, errors: validation.errors });
        }}>
          送出
        </Button>
      </View>
      <View style={styles.row}>
        <Button mode="contained" onPress={() => props.navigation.navigate('Task')}>
          取消
        </Button>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    marginTop: 16,
    marginBottom: 8,
  },
});

export default CreateTaskScreen;
