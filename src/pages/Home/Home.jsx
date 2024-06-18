import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className='container'>
<div className='log'>
  <div className='top'>
<h1>Events</h1>
<h4>Enter your login credentials</h4>
</div>
<form action="/login" method='post'>
<input type="text" />
<br />
<input type="text" />
<br />
<button className='submit'>Submit</button>
<p>Not registered? <Link to="register">Click here!</Link></p></form>
</div>


    </div>
  )
};

export default Home;
