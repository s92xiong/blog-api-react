import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [blogData, setBlogData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
    const json_data = await response.json();
    setBlogData(json_data);
    console.log(json_data);
  };

  return (
    <div className="App">
      <Navbar />
      <Card blogData={blogData} />
    </div>
  );
}

export default App;