import React, { useContext } from 'react'; 

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Provider';



const Login = () => {
  const { creactLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();



    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log(email,password)

    creactLogin(email,password)
    .then((result) =>{
      const user = result.user;
      console.log(user);

      if (user) {
        alert('login succsefuly')
        navigate('/')

        
      }
    })
  }




    return (
        <div  >

                 
         <div className="flex justify-center items-center min-h-screen ">
      <section>
        <div className="login-box  bg-opacity-50 border-2  rounded-lg p-8 backdrop-filter backdrop-blur-lg">

   
            <h2 className="text-2xl text-white  text-center mt-5">Login</h2>
         <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
      <form className="card-body" onSubmit={submit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email"  name='email' placeholder="email" className="bg-transparent border-b-2 border-white border-opacity-50 focus:outline-none focus:border-opacity-100 text-white placeholder-transparent placeholder-opacity-50" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="bg-transparent border-b-2 border-white border-opacity-50 focus:outline-none focus:border-opacity-100 text-white placeholder-transparent placeholder-opacity-50" required  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <button type="submit" className="w-full h-10 bg-red-700 border-none outline-none rounded-full cursor-pointer text-white font-semibold">Login</button>


            <div className="register-link mt-6">
              <p className="text-white">Don't have an account?<Link to='/register'>
              <a href="#" className="font-semibold text-white hover:underline">Register</a>
              
              </Link></p>
            </div>
      </form>
    </div>
          



        
        </div>
      </section>
    </div>
        </div>
    );
};

export default Login;