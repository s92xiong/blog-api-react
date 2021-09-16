import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';

function App() {

  const [blogData, setBlogData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
    const resData = await response.json();
    setBlogData(resData);
    console.log(resData);
  };

  return (
    <div className="App">
      <Card blogData={blogData} />
    </div>
  );
}

export default App;