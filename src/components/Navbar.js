import React, {useState , useEffect} from 'react';
import './components.css';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  // Hooks to set different modes
  const [myStyle, setStyle] = useState('light'); 
  const [btntext,setbtntext] = useState('Enable Dark Mode');
  // onclick functions to toggle different modes
  const togglestyle = () => {
    if (myStyle === 'light') {
      setStyle('dark');
      setbtntext("Enable light Mode");
      props.showalert("! Dark mode has been enabled ","success");
    } else {
      setStyle('light');
      setbtntext("Enable Dark Mode");
      props.showalert("! Light mode has been enabled ","success");
    }
  };
  const togglestyle1 = () =>{
     if(myStyle === 'light'){
      setStyle('redmode');
      props.showalert("Red mode has been enabled ", "success");
     }
     else{
      setStyle('light');
      props.showalert("! Light mode has been enabled ","success");
     }
  };
  const togglestyle2 = () =>{
     if(myStyle === 'light'){
      setStyle('yellowmode');
      props.showalert("Yellow mode has been enabled ", "success");
     }
     else{
      setStyle('light');
      props.showalert("! Light mode has been enabled ","success");
     }
  };
  const togglestyle3 = () =>{
     if(myStyle === 'light'){
      setStyle('greenmode');
      props.showalert("Green mode has been enabled ", "success");
     }
     else{
      setStyle('light');
      props.showalert("! Light mode has been enabled ","success");
     }
  };
  const togglestyle4 = () =>{
     if(myStyle === 'light'){
      setStyle('bluemode');
      props.showalert("Blue mode has been enabled ", "success");
     }
     else{
      setStyle('light');
      props.showalert("! Light mode has been enabled ","success");
     }
  };

  // use effect functions to set the background color
  useEffect(() => {
    document.body.className = myStyle;
  }, [myStyle]);
  return (
    <>
 <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current = "page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.About}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action Required
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Change case</a></li>
            <li><a className="dropdown-item" href="/">Count letters</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Some other action</a></li>
          </ul>
        </li>
      </ul>
      <button type="button" className="colorpalatte red btn" onClick={togglestyle1}></button>
      <button type="button" className="colorpalatte yellow btn" onClick={togglestyle2}></button>
      <button type="button" className="colorpalatte green btn" onClick={togglestyle3}></button>
      <button type="button" className="colorpalatte blue btn" onClick={togglestyle4}></button>
      </div>
      <div className="form-check form-switch" >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglestyle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
</nav>
  </>
  )
}

Navbar.propTypes = {           //Declaring what kind of props can be passed to the component
    // title : PropTypes.string.isRequired ,  this makes it compulsory to provide this prop either by default value or in app.js
    title : PropTypes.string.isRequired ,
    links : PropTypes.string 
};

Navbar.defaultProps = {        //Sets the default value if no props is given to the component
    title : "Set title Here",
    links : "Set Links Here"
}