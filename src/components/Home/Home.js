import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <h1> Hello! </h1>
      This is just a prototype for me to practice some coding. Things might look messy, but i will keep this updated.
      <div>Have fun and send me some feedback if you want to :) </div>
      <br />
      <h3>
        {' '}
        you can contact me in here:
        <Button type="link">
          {' '}
          <a href="https://github.com/andressavalentim"><GithubOutlined /></a>
        </Button>

      </h3>

    </div>

  );
}

export default Home;
