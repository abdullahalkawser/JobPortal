import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Provider";



const Register = () => {
  const {creacteUser} = useContext(AuthContext)
  // Destructuring form methods from useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, name } = data;
    console.log(email, password, name);

    creacteUser(email,password)
    .then((result) =>{
      const user = result.user;
      console.log(user);
      if ( user) {
        alert('user is craeted')
        
      }
    })

  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen ">
        <section>
          <div className="login-box  bg-opacity-50 border-2  rounded-lg p-8 backdrop-filter backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-white  text-center mt-5">
              Register
            </h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="name"
                    placeholder="email"
                    className="bg-transparent border-b-2 border-white border-opacity-50 focus:outline-none focus:border-opacity-100 text-white placeholder-transparent placeholder-opacity-50"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="bg-transparent border-b-2 border-white border-opacity-50 focus:outline-none focus:border-opacity-100 text-white placeholder-transparent placeholder-opacity-50"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 3,
                      maxLength: 8,
                    })}
                    type="password"
                    placeholder="password"
                    className="bg-transparent border-b-2 border-white border-opacity-50 focus:outline-none focus:border-opacity-100 text-white placeholder-transparent placeholder-opacity-50"
                    required
                  />

                  {errors.password && errors.password.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be at least 3 characters long
                    </p>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must not exceed 8 characters
                    </p>
                  )}
                </div>
                {/* <div className="form-control">
         <label className="label">
           <span className="label-text text-white">Photo</span>
         </label>
         <input type="file" placeholder="password" className=" text-white " required  />
      
       </div> */}
                <button
                  type="submit"
                  className=" mt-5 w-full h-10 bg-white border-none outline-none rounded-full cursor-pointer  font-semibold"
                >
                  Register
                </button>
                <div className="register-link mt-6">
                  <p className="text-white">
                    Do have an account?{" "}
                    <Link to="/login">
                      <a
                        href="#"
                        className="font-semibold text-white hover:underline"
                      >
                        Login
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
