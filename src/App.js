import React , { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() { 
  const[alert,setalert] = useState(null);
  const showalert = (message , type) =>{
       setalert({
        msg : message,
        type: type
       })
       setTimeout(() => {
        setalert(null);
       }, 1500);
  }
  return (
    <>
 {/* <Navbar/>  //Passing a component from other file to othe app.js */}
  {/* // <Navbar/>  //It will take the default value */}
  <Router>
   <Navbar showalert = {showalert} title = "Textutlis" About = "About us"/>
   <Alert alert = {alert}/>
   <div className="container">
   <Switch>
   { <Route exact path="/about">
            <About />
          </Route> }
          <Route exact path="/">
        <Textarea heading = "Enter Your Text Here" showalert={showalert}/>
          </Route>
        </Switch>
   </div>
   </Router>
   </>
  );
}


export default App;
