// In index.js of a new project
import React, {useState} from 'react';
import {
  Container,
  Button,
  Header,
  Text,
  Icon,
  Item,
  Input,
  List,
  ListItem,
} from 'native-base';

const renderItem = (task) => {
  return (
    <ListItem>
      <Text>{task.title}</Text>
    </ListItem>
  );
}

const HomeScreen = (props) => {
  const [taskTitle, setTaskTitle] = useState('');

  return (
    <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="tasks" type="FontAwesome" />
            <Input placeholder="Task" value={taskTitle} onChangeText={text => setTaskTitle(text)}/>
          </Item>
          <Button transparent onPress={() => {
            if(taskTitle !== ''){
              const payload = {title: taskTitle};
              props.handleAddTask(payload);
              setTaskTitle('');
            }
          }}>
            <Text>Add</Text>
          </Button>
        </Header>

        <List
          dataArray={props.tasks}
          keyExtractor={item => item.title}
          renderRow={renderItem} />
    </Container>
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
