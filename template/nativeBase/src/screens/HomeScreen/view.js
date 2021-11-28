// In index.js of a new project
import React, {useState} from 'react';
import {
  IconButton,
  HStack,
  VStack,
  Text,
  Icon,
  Box,
  Input,
  FlatList,
  Checkbox,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const renderItem = ({item, index, handleUpdateTask, handleDeleteTask}) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2">
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <Checkbox
          isChecked={item.isCompleted}
          onChange={() => handleUpdateTask({index, ...item, isCompleted: !item.isCompleted})}
          value={item.title}>
          <Text
            mx="2"
            strikeThrough={item.isCompleted}
            _light={{
              color: item.isCompleted ? 'gray.400' : 'coolGray.800',
            }}
            _dark={{
              color: item.isCompleted ? 'gray.400' : 'coolGray.50',
            }}>
            {item.title}
          </Text>
        </Checkbox>
        <IconButton
          size="sm"
          colorScheme="trueGray"
          icon={
            <Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />
          }
          onPress={() => handleDeleteTask({ index })}
        />
      </HStack>
    </Box>
  );
};

const HomeScreen = (props) => {
  const [taskTitle, setTaskTitle] = useState('');

  return (
    <Box
    _dark={{
      borderColor: 'gray.600',
    }}
    borderColor="coolGray.200"
    >
      <VStack space={4}>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={(v) => setTaskTitle(v)}
            value={taskTitle}
            placeholder="Add Task"
          />
          <IconButton
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon
                as={FontAwesome}
                name="plus"
                size="sm"
                color="warmGray.50"
              />
            }
            onPress={() => {
              if (taskTitle !== '') {
                const payload = {title: taskTitle};
                props.handleAddTask(payload);
                setTaskTitle('');
              }
            }}
          />
        </HStack>
      </VStack>
      <FlatList
        style={{marginBottom: 64}}
        data={props.tasks}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={(args) => renderItem({...args, handleUpdateTask: props.handleUpdateTask, handleDeleteTask: props.handleDeleteTask })}
      />
    </Box>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

export default HomeScreen;
