import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
    const resData = await response.json();
    setData(resData);
    console.log(resData);
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;