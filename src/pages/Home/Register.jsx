import './Home.styles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '../../app/services/user';

const Register = () => {
  const [username, setUsername] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = async () => {
    await createUser({ nickname: username, email: mail, password })
  }
  return (
    <div className="container">
      <div className='login-container'>
        <div className='top'>
          <h1 className='title'>EVENTS</h1>
          <h4>Inserta tus credenciales para registrarte:</h4>
        </div>

        <form action="/login" method='post'>

          <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />

          <input type="text" placeholder='Mail' onChange={e => setMail(e.target.value)} />

          <input type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} />

          <Link to={'/'}><button className='submit' onClick={handleRegister}>Enviar</button></Link>
          <p>Ya tienes una cuenta? <Link to="/">Pulsa aquí!</Link></p></form>
      </div>
    </div>
  )
}

export default Register