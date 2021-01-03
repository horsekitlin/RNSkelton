// In index.js of a new project
import React, {useState} from 'react';
import {
  Container,
  Content,
  Button,
  Header,
  Text,
  Icon,
  Item,
  Input,
  List,
  ListItem,
} from 'native-base';

const HomeScreen = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  return (
    <Container>
      <Content>
        <Header searchBar rounded>
          <Item>
            <Icon name="tasks" type="FontAwesome" />
            <Input placeholder="Task" value={taskTitle} onChangeText={text => setTaskTitle(text)}/>
          </Item>
          <Button transparent onPress={() => {
            if(taskTitle !== ''){
              setTasks([...tasks, {title: taskTitle}]);
              setTaskTitle('');
            }
          }}>
            <Text>Add</Text>
          </Button>
        </Header>

        <List>
          {tasks.map((task, index) => {
            return (
              <ListItem>
                <Text>{task.title}</Text>
              </ListItem>
            );
          })}
        </List>
      </Content>
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
