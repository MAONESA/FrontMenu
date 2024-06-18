import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import './Home.styles.css'

const Home = () => {
const [username,setUsername]=useState();
const [mail,setMail]=useState();
const [password,setPassword]=useState();

  return (
    <div className="container">
<div className='login-container'>
  <div className='top'>
<h1 className='title'>EVENTS</h1>
<h4>Introduce tus credenciales:</h4>
</div>
<form action="/login" method='post'>

<input type="text" placeholder='Username'/>

<input type="text" placeholder='Password'/>
<button className='submit' onClick={()=>createUsuario({username,mail,password})}>Enviar</button>
<p>No tienes cuenta? <Link to="register">Pulsa aquí!</Link></p></form>
</div>
</div>


   
  )
};

export default Home;
