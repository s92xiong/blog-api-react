import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import BlogList from './Components/BlogList/BlogList';
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
        <div className="container">
          <Switch>
            <Route
              // Homepage
              exact
              path="/"
              render={(props) => (<BlogList {...props} blogData={blogData} />)}
            />
            <Route
              exact
              path="/about"
              render={(props) => (<About {...props} name="Sheuh Xiong" />)}
            />
            <Route
              exact
              path="/posts/:id"
              render={(props) => (<Blog {...props} />)}
            />
          </Switch>
        </div>
      </div>  
    </BrowserRouter>
  );
}

export default App;