import { useState } from 'react';
import '../App.css';
import Header from './Header';

function App() {

  const [legends, setLegends] = useState([]);

  fetch("http://localhost:3001/legends")
    .then(r => r.json())
    .then(setLegends)


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
