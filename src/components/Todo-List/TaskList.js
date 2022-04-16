import { Avatar, List, Button, message } from "antd";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import './TaskList.css';




const TaskList = ({setTodoList, todoList, setDeletedCount, deletedCount, setCompletedCount, completedCount, addTaskToBacklog }) => {


  const handleComplete = (id, option) => {
    const newList = todoList.filter( item => item.id !== id)
    const getTask =  todoList.filter( item => item.id === id)
    if(option === 'success') {
      message.success('task completed');
      setCompletedCount(completedCount+1)
    } 
    if(option === 'failed') {
      message.warning('Task deleted');
      setDeletedCount(deletedCount+1)
    }

    setTodoList(newList, option);
    addTaskToBacklog(getTask, option)
        
  }


  return <List dataSource={todoList}  renderItem={item => (
    <List.Item >
      <List.Item.Meta 
        avatar={<Avatar src="https://w7.pngwing.com/pngs/199/1003/png-transparent-computer-icons-laborer-avatar-worker-heroes-logo-area.png"/>}
        title={item.taskName}
        description={item.taskDesc}
      />
      <Button type="link">
        <CheckOutlined style={{ color: '#73d13d'}} onClick={() => handleComplete(item.id, 'success')} />
        <CloseOutlined style={{ color: '#ff4d4f'}} onClick={() => handleComplete(item.id, 'failed')} />
      </Button>
            
    </List.Item>
  )}>
  </List>
}

export default TaskList;