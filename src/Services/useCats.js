import axios from "axios";

const useCats = () => {

  function getCats () {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => 
        console.log(response.json())
      )
      .catch(error => console.log(error))
  }
  getCats();

}
 




export default useCats;