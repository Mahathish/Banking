import React from 'react';
import { Link } from 'react-router-dom';
function Login(){
    return(
    <div class="box">
      <h1>Banking Application</h1>
    <h1>Login</h1>
    <input type="email" placeholder="Username/Email" name="email" required />
    <input type="password" placeholder="Password" required />
    <button>Login</button>
    <p>Not a member? <span><Link to='/register'>Sign Up</Link></span></p>
  </div>
    );
}
export default Login;