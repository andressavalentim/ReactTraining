
import { FormOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Todo from './components/Todo-List/Todo';
import Home from './components/Home/Home';
import CuteCats from './components/Cute-Cats/CuteCats';


function App() {

 
  
  return (

    <Router>
      <Menu  mode="horizontal">
      <Menu.Item icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FormOutlined />}>
        <Link to='/todo'>To-Do List</Link>
        </Menu.Item>
        <Menu.Item icon={<HeartOutlined />}>
          <Link to='/cutecats'>Cute Cats</Link>
        </Menu.Item>
      </Menu>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/todo' element={<Todo />}/> 
        <Route path='/cutecats' element={<CuteCats />}/>
      </Routes>
    </Router>
      


  );
}

export default App; 
