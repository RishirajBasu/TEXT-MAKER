import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [Modetype, setModetype] = useState(`${mode==='light'?'dark':'light'} Mode`)
  const [alert, setAlert] = useState(null);
  const [myStyle, setmyStyle] = useState({
    color:"black",
    backgroundColor:"white",
    padding:"25px",
    borderRadius:"20px"
  });
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggle=()=>{
    if(mode==='light'){
      setMode('dark')
      setModetype('light Mode')
      document.body.style.backgroundColor="#071633"
      showAlert("Dark mode has been enabled","success")
      // dynamically changing the title of the document
      // document.title="text-dark"
    }
    else{
      setMode('light')
      setModetype('dark Mode')
      document.body.style.backgroundColor="beige"
      // showAlert("Light mode has been enabled","success")
      // dynamically changing the title of the document
      // document.title="text-light"
    }
    if(Modetype==="dark Mode"){
      let newstyle={
        color:"black",
        backgroundColor:"white",
        padding:"25px",
        borderRadius:"20px"
      }
      setmyStyle(newstyle)
    }
    else{
      let newstyle={
        color:"white",
        backgroundColor:"black",
        padding:"25px",
        borderRadius:"20px"
      }
      setmyStyle(newstyle)
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="Text-Maker" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    {/* <Routes> */}
      {/* <Route exact path="/" element={ */}
      <Textarea myStyle={myStyle} mode={mode} toggle={toggle} showAlert={showAlert}/>
       {/* }> */}
      {/* </Route>
          <Route exact path="/about" element={ <About  mode={mode} myStyle={myStyle}/>} />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
