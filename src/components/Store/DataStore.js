import axios from "axios";

function DataStore({data, setData}) {

  if(!data) {
    axios.get('https://dummyjson.com/products')
      .then(response => 
        setData(response.data.products)
      )
      .catch(error => console.log(error))
  };
 
} 
 



  
export default DataStore; 