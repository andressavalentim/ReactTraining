import { Modal } from "antd";
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskStats.css'


const TaskStats = ({visible, onClose, taskCount, completedCount, deletedCount}) => {

    return ( 
    <Modal 
        title={`Total of tasks: ${taskCount}`} 
        visible={visible} 
        onCancel={onClose} 
        >
        <ProgressBar variant="success" now={completedCount} />
        <p className="completed">Completed tasks: {completedCount}</p>
        <ProgressBar  variant="danger" now={deletedCount} />
         <p className="deleted">Deleted taks: {deletedCount}</p>
            
    </Modal>
    )
}
export default TaskStats;