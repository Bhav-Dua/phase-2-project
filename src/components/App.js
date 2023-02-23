import { useEffect, useState } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import LegendsList from './LegendsList';
import LegendForm from './LegendForm';

function App() {

  const [legends, setLegends] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/legends")
    .then(r => r.json())
    .then(setLegends)
  }, [])

  function addLegend(newLegend) {
    setLegends([
      ...legends,
      newLegend
    ])
  }


  return (
    <div className="App">
      <Header />
      <LegendsList legends={legends} />
    </div>
  );
}

export default App;
