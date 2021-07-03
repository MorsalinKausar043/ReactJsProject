
import React from 'react';
import Home from "./Home" ;
import About from "./About";
import Contact from './Contact';
import Services from './Services';
import Portfolio from './Portfolio';
import Error from './Error';
import { Switch,Route } from 'react-router';
import Navbar from "./Navbar" ;
import Count from './Count';

const App = () => {
  return (
    <>  
        <Navbar />
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/About" exact render={() => <About name="About"/>} />
          <Route path ="/Contact" exact component={Contact} />
          <Route path ="/Services" exact component={Services} />
          <Route path ="/Portfolio" exact component={Portfolio} />
          <Route path ="/Count" exact component={Count} />
          <Route component={Error} />
        </Switch>
    </>
  )
}

export default App

