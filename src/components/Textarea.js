import React, {useState} from 'react'         //to use hooks in react
import './components.css';
 
export default function Textarea(props) {
    const[text,setText] = useState('');        //syntax to use hooks 
   
    const changeto_upper = ()=>{
        console.log("Button was clicked");
    setText(text.toUpperCase());
    props.showalert("Changed to uppercase","success");
    }
    const changeto_lower = ()=>{
        console.log("Button was clicked");
    setText(text.toLowerCase());
    props.showalert("Changed to lowercase","success");
    }
    const remove_space = () =>{
      console.log("Button was clicked");
      let newtext = text.split(" ").join("");
      setText(newtext);
    props.showalert("Spaces have been removed","success");
    }
    const remove_multiple_spaces = () => {
      let newtext = text.replace(/\s+/g, ' ');
      setText(newtext);
    props.showalert("Multiple spaces have been removed","success");
  }
  const clear_text = () =>{
    let newtext = "";
    setText(newtext);
    props.showalert("Text has been cleared","success");
  }
  const copy_text = () =>{
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text has been copied ","success");
    }
    const handle_on_change = (event) =>{
        console.log("on change");
        setText(event.target.value);
    } 
  return (
      <>
<div className="container my-3" >
 <h1>{props.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handle_on_change} rows="8" value={text}></textarea>
</div>
  <button disabled ={text.length===0} className="primarybutton my-1 mx-1" onClick={changeto_upper}>Change to Uppercase</button>
  <button disabled ={text.length===0}  className="primarybutton my-1 mx-1" onClick={changeto_lower}>Change to Lowercase</button>
  <button disabled ={text.length===0} className="primarybutton my-1 mx-1" onClick={remove_space}>Remove Spaces</button>
  <button disabled ={text.length===0} className="primarybutton my-1 mx-1" onClick={remove_multiple_spaces}>Remove Multiple Spaces</button>
  <button disabled ={text.length===0} className="primarybutton my-1 mx-1" onClick={copy_text}>Copy Text</button>
  <button disabled ={text.length===0} className="primarybutton my-1 mx-1" onClick={clear_text}>Clear Text</button>
  {/* <button className="primarybutton my-3" onClick={frequency(text)}>Show words frequency</button> */}
    
    <div className="bottom my-5">
      <h3>Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to show"}</p>
    </div>
      </>
  )
}
