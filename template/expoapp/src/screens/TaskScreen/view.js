import React, {useState, useEffect} from 'react';
import {StyleSheet, useWindowDimensions, FlatList} from 'react-native';
import Background from '~/components/Background';
import {theme} from '~/constants/core/theme';
import {TabView, SceneMap} from 'react-native-tab-view';
import TaskItem from './components/TaskItem';

const getParams = (index, props) => {
  const params = {
    userId: props.auth.user.id,
  };
  if (index === 0) return params;

  params.isCompleted = index === 2;
  return params;
};

const fetchTasks = (params, handleGetTasks, options) => {
  const {page = 1, pageSize = 10} = options;
  return handleGetTasks({
    ...params,
    page,
    pageSize,
  });
};

const TaskListRoute = (props) => {
  const {task, params, tabIndex, navigation, handleGetTasks, handleUpdateTask} =
    props;
  return (
    <FlatList
      data={task.rows}
      refreshing={false}
      onRefresh={() => {
        fetchTasks(params, handleGetTasks, {page: 1, pageSize: 10});
      }}
      onEndReached={() => {
        if (task.rows.length < task.count) {
          fetchTasks(params, handleGetTasks, {page: task.page + 1, pageSize: 10})
        }        
      }
      }
      onEndReachedThreshold={0.3}
      renderItem={({item, index}) => (
        <TaskItem
          key={item.id}
          {...item}
          index={index}
          tabIndex={tabIndex}
          navigation={navigation}
          handleUpdateTask={handleUpdateTask}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const TaskScreen = (props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'mytasks', title: 'My Tasks'},
    {key: 'inprogress', title: 'In Progress'},
    {key: 'completed', title: 'Completed'},
  ]);

  const params = getParams(index, props);
  const {task, navigation, handleUpdateTask, handleGetTasks} = props;

  const renderScene = SceneMap({
    mytasks: () => (
      <TaskListRoute
        task={task}
        tabIndex={index}
        params={params}
        navigation={navigation}
        handleGetTasks={handleGetTasks}
        handleUpdateTask={handleUpdateTask}
      />
    ),
    inprogress: () => (
      <TaskListRoute
        task={task}
        tabIndex={index}
        params={params}
        navigation={navigation}
        handleGetTasks={handleGetTasks}
        handleUpdateTask={handleUpdateTask}
      />
    ),
    completed: () => (
      <TaskListRoute
        task={task}
        tabIndex={index}
        params={params}
        navigation={navigation}
        handleGetTasks={handleGetTasks}
        handleUpdateTask={handleUpdateTask}
      />
    ),
  });

  useEffect(() => {
    fetchTasks(params, handleGetTasks, {page: 1, pageSize: 10});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={(nextIndex) => {
          const nextParams = getParams(nextIndex, props);
          props.handleGetTasks({
            ...nextParams,
            page: 1,
            pageSize: 10,
          });
          setIndex(nextIndex);
        }}
        initialLayout={{width: layout.width}}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default TaskScreen;
