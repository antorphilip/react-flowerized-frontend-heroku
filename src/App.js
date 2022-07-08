import {useState,useEffect} from 'react';

import './App.css';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/items", )
      .then(response => response.json())
      .then((data) => setItems(data));
  },[]);
  return (
    
      <div>
        <h1>Items</h1>
        {items.map((item)=> (
          <div key={item.id}>
            <h1>id: {item.id}</h1>
            <h1>name: {item.name}</h1>
            <h1>created: {item.created}</h1>
      </div>
        ))}
      </div>
  );
        }

export default App;
