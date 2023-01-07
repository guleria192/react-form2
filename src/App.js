import { useState } from 'react';
import './App.css';

function App() {

  let err = document.getElementsByClassName('err');
  let done = document.getElementsByClassName('done');

  const[fullname,setFullname]=useState("");
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  const[confirm,setConfirm]=useState("");

  const handleName = (event) =>{
    console.log(event.target.value);
    setFullname(event.target.value)
  }
  const handleEmail = (event) =>{
    console.log(event.target.value);
    setFullname(event.target.value)
  }
  const handlePass = (event) =>{
    console.log(event.target.value);
    setFullname(event.target.value)
  }
  const handleConfirm = (event) =>{
    console.log(event.target.value);
    setFullname(event.target.value)
  }




const handleSubmit = (event)=>{
event.preventDefault();
const name = event.target.elements.fullname.value;
const email = event.target.elements.email.value;
const pass = event.target.elements.pass.value;
const confirm = event.target.elements.confirm.value;

console.log(name,email,pass,confirm);




}





  return (

    <form onSubmit={handleSubmit}>
      
    <div className="App1">

    <div className='App2'>
      <h1>Signup</h1>
    </div>



    <div className='App'>
     <input type="text" id='fullname' placeholder='Full Name' onChange={handleName}/>
    </div>
    <div className='App'>
     <input type="email" id='email' placeholder='Email' onChange={handleEmail}/>
    </div>
    <div className='App'>
     <input type="password" id='pass' placeholder='Password' onChange={handlePass}/>
    </div>
    <div className='App'>
     <input type="text" id='confirm' placeholder='Confirm Password' onChange={handleConfirm}/>
    </div>

<div className='App3'><p className='err'></p></div>
<div className='App4'><p className='done'></p></div>

    <div className='App5'>
      <button type='submit'>Submit</button>
    </div>



    </div>
    </form>
  );
}

export default App;
