import {useState,useEffect} from 'react';
import React from 'react'

function Events() {
    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://flowerized-backend.herokuapp.com/api/items", )
      .then(response => response.json())
      .then((data) => setItems(data));
  },[]);
  return (
    <div>
        <h1>Items</h1>
        {items && items.map((item)=> (
          <div key={item.id}>
            <h1>id: {item.id}</h1>
            <h1>name: {item.name}</h1>
            <h1>created: {item.created}</h1>
            <h1>pic link: {item.itemPicture}</h1>
            <img src={item.itemPicture} alt={item.name}/>
            <br></br>

      </div>
        ))}
      </div>
  );
}

export default Events
