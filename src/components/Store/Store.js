
import { Button, Card, Col, message, Row, Input } from "antd";
import { useState } from "react";
import DataStore from "./DataStore";
import './Store.css'


const { Search } = Input;


function Store() {

  const [data, setData] = useState();
  const [cart, setCart] = useState([]);


  const handleAddToCart = (item) => {
    const newItem = item;
    setCart([...cart, newItem])
    const toastMessage = <div>{item.title} added. <br/><Button type="link">See the cart. </Button> </div> ;
    message.success(toastMessage)
  }


  return <> <DataStore setData={setData} data={data} />
    <Search
      placeholder="input search text"
      allowClear
      size="large"
      style={{width: 800, margin: 20}}
    />
    <div className="store-container">
      
      {data && data.map((item) => {
        return (
          <Row>

            <Col>
              <Card bordered={true} title={item.title}  style={{ width: 200 }} size="small" cover={<img alt="" src={item.images[0]}/>}>
                <Card.Meta description={item.description} />
                <Button type="link" onClick={() => handleAddToCart(item)}>Add to cart</Button>
              </Card>

            </Col>
          </Row>
        )
      })}
    </div>
  </>
}

  
export default Store; 