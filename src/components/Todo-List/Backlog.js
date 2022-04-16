import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Modal, Table } from "antd"
import './Backlog.css'

const Backlog = ({ visible, onClose, taskDone}) => {

  const columns = [ {
    title:'Task',
    dataIndex: 'taskName',
    key: 'taskDone.id',
  },
  {
    title:'Description',
    dataIndex: 'taskDesc',
    key: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'taskStatus',
    key: 'id',
    render: taskStatus => {
      return <p>{taskStatus === 'success'? <CheckOutlined style={{ color: '#73d13d'}} /> : <CloseOutlined style={{ color: '#ff4d4f'}} />}</p>
    }
  },
  ];

  return  <Modal visible={visible} onCancel={onClose} footer={false} width="70rem">
    <Table dataSource={taskDone} columns={columns} pagination={false} size="large">

    </Table>
  </Modal>
}

export default Backlog;