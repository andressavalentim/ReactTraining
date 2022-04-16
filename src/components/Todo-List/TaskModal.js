import { Input, Modal } from "antd";
import { useEffect, useState } from "react";
import './TaskModal.css';

const TaskModal = ({ taskDesc, setTaskDesc, task,  setTask, visible, onClose, addTask }) => {

  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    
    if(task && taskDesc) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }

  }, [task, taskDesc])
    

  const getTask = (e) => {
    if(e.trim().length > 0) {
      setTask(e);

    }
  }  

  const getTaskDesc = (e) => {
    if(e.trim().length > 0) {
      setTaskDesc(e);
    }
  }


  return ( 
    <Modal okButtonProps={{ disabled : buttonDisable}} title='What is your task today?' visible={visible} onCancel={onClose} onOk={addTask} >
      <Input placeholder="Add your task" onChange={(e) => {getTask(e.target.value)}} />
      <Input placeholder="what is your task about?" onChange={(e) => {getTaskDesc(e.target.value)}} />
    </Modal>
       
  )
}
export default TaskModal;