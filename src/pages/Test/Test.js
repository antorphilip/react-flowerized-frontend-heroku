import React from "react";
import { useState, useEffect } from "react";

function App() {

    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://flowerized-backend.herokuapp.com/api/update/1/?format=jsons", )
        .then(response => response.json())
        .then((data) => setItems(data));
    },[]);
    return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Items</h1>
          {items && items.map((item)=> (
            <div key={item.id}>
              <h1>id: {item.id}</h1>
              <h1>name: {item.item_name}</h1>
              
              <br></br>
              
        </div>
          ))}
        </div>
    );
          }
  
  export default App;
