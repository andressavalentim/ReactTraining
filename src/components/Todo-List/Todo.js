import { Button } from 'antd'; 
import { useState } from 'react';
import TaskModal from './TaskModal';
import TaskList from './TaskList';
import './Todo.css'
import TaskStats from './TaskStats';
import Backlog from './Backlog';


function Todo() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState();
  const [taskDesc, setTaskDesc] = useState();
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [deletedCount, setDeletedCount] = useState(0);
  const [backlogOpen, setBacklogOpen] = useState(false)
  const [taskDone, setTaskDone]=useState([]);

  
  const handleOpenStatsModal = () => {
      setStatsModalVisible(true);
  }
  const handleCloseStatsModal = () => {
      setStatsModalVisible(false);
  }

  const handleOpen = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => { 
    setIsModalOpen(false);
    cleanFields();
  }

  const cleanFields = () => {
      setTask('');
      setTaskDesc('');
  }

  const handleOpenBacklog = () => {
      setBacklogOpen(true);
  }

  const handleCloseBacklog = () => {
    setBacklogOpen(false)
  }

  const addTask = () => {

        const newTask = {
            id:Math.floor(Math.random() * 1000),
            taskName: task,
            taskDesc: taskDesc,
            taskStatus: undefined,
        }

        setTodoList([...todoList, newTask])
        setTaskCount(taskCount+1)
        handleClose();
        cleanFields();
 }

 const addTaskToBacklog = (taskCompleted, option) => {
        const newCompletedTask = {
            id: taskCompleted[0].id,
            taskName: taskCompleted[0].taskName,
            taskDesc: taskCompleted[0].taskDesc,
            taskStatus: option,
        }
        setTaskDone([...taskDone, newCompletedTask]) 
 }

 

 
  

  return (
    <>


    <Button 
     onClick={handleOpen}
     type="primary">Add New Task
     </Button> 

    <Button 
     type='link' 
     onClick={handleOpenStatsModal}>
     Check out your tasks statistics!
    </Button>

    <Button 
     type='link' 
     onClick={handleOpenBacklog}>
     Backlog
    </Button>

    

    {statsModalVisible && 
    <TaskStats 
     visible={statsModalVisible} 
     onClose={handleCloseStatsModal}
     taskCount={taskCount}
     deletedCount={deletedCount}
     completedCount={completedCount} />}
    
    {isModalOpen &&
     <TaskModal 
     visible={isModalOpen} 
     setTask={setTask} 
     task={task}
     onClose={handleClose}
     addTask={addTask} 
     setTaskDesc={setTaskDesc}
     taskDesc={taskDesc}
     />}
    


    <TaskList 
     todoList={todoList} 
     setTodoList={setTodoList}
     setCompletedCount={setCompletedCount}
     completedCount={completedCount}
     setDeletedCount={setDeletedCount}
     deletedCount={deletedCount}
     addTaskToBacklog={addTaskToBacklog}
      />

   
    
    {backlogOpen && 
    <Backlog 
    visible={backlogOpen} 
    onClose={handleCloseBacklog}
    taskDone={taskDone}
    /> }
    </>

    

  );
}

export default Todo; 
