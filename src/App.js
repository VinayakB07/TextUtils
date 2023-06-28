
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{
          setAlert(null);
       },1500)
  }
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        document.getElementById("x").style.color='white';
        showAlert('Dark Mode Enabled','success');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.getElementById("x").style.color='black';
        showAlert('Dark Mode Disabled','success');
      }
  }
  return (
    <section>
  <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
  <Alerts alert={alert}/>
  <div className='container'>
  <TextForm heading='Write Your Text Below' mode={mode} showAlert={showAlert}/>
  </div>
    </section>
 );
}

export default App;
