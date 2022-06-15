import Bar from "./components/Bar";
import Txtgen from "./components/Txtgen";
import React, { useState } from 'react'
import Alt from "./components/Alt";
import { type } from "@testing-library/user-event/dist/type";






function App() {
 
  const [mode, setMode] = useState('light');
  const [btntxt, setBtntxt] = useState('Dark');
  const [alert, setAlert] = useState(null)

  const showalert = (msg,type) =>{

    setAlert({
      msg : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 700);
  }
 

   
  const dmode = () =>{
     
    if(mode === 'light')
    {
      setMode('dark');
      setBtntxt('Light');
    document.body.style.backgroundColor = '#464242';
    document.body.style.color = 'white';
    showalert("dark mode on","success");
    }
    else
    {
      setMode('light')
      setBtntxt('Dark');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showalert("light mode on","success");
   
    }

  }
  return (
    <>
   
      
      
      <Bar  title="Tejas Kharade" btntxt={btntxt} mode={mode} dakmode={dmode}/>
     <Alt alert={alert}/>

    <div className="container my-3">
            <Txtgen show={showalert} btn1="UPPERCASE" btn2="lowercase" btn3="Clear" btn4="copy clipbord" btn5="sound" btn6="remove spaces"/>
    </div>

  
    
     
    </>
  );
}

export default App;
