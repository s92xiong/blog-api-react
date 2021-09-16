import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';
import loadBlogData from './Javascripts/loadBlogData';

function App() {

  const [blogData, setBlogData] = useState();

  useEffect(() => {
    loadBlogData(setBlogData);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar name="Sheuh Xiong" />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (<Card {...props} blogData={blogData} />)}
          />
          <Route
            path="/about"
            render={(props) => (<About {...props} name="Sheuh Xiong" />)}
          />

        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;