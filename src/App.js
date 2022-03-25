import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [var_result,setResult_fun]=useState("");

  const clickHandler=(event)=>{
    setResult_fun(var_result.concat(event.target.value))
  }
  const clearDisplay=()=>{
    setResult_fun("");
  }
  const calculate=()=>{
    setResult_fun(eval(var_result).toString())
  }
  
  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={var_result} />
      < input className="button" type="button" value="9" onClick={clickHandler}/>
      < input className="button" type="button" value="8" onClick={clickHandler}/>
      < input className="button" type="button" value="7" onClick={clickHandler}/>
      < input className="button" type="button" value="6" onClick={clickHandler}/>
      < input className="button" type="button" value="5" onClick={clickHandler}/>
      < input className="button" type="button" value="4" onClick={clickHandler}/>
      < input className="button" type="button" value="3" onClick={clickHandler}/>
      < input className="button" type="button" value="2" onClick={clickHandler}/>
      < input className="button" type="button" value="1" onClick={clickHandler}/>
      < input className="button" type="button" value="0" onClick={clickHandler}/>
      < input className="button" type="button" value="." onClick={clickHandler}/>
      < input className="button" type="button" value="+" onClick={clickHandler}/>
      < input className="button" type="button" value="-" onClick={clickHandler}/>
      < input className="button" type="button" value="*" onClick={clickHandler}/>
      < input className="button" type="button" value="/" onClick={clickHandler}/>
      < input className="button" type="button" value="%" onClick={clickHandler}/>
      
      < input className="button button1" type="button" value="Clear" onClick={clearDisplay} />
      < input className="button button1" type="button" value="=" onClick={calculate} /> 
    </div>
  )
}


export default App