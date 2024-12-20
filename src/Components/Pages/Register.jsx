import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottieData from '../../assets/Lotties/Animation - 1734273755844.json'
import  { authorizedContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
 
const Register = () => {
  const {registerUser, googleLoginBtn} = useContext(authorizedContext)
  const [errorMessage,setErrorMessage] = useState("")
  const navigate = useNavigate()
  const registerHandler = (event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const photourl = event.target.photourl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    setErrorMessage("")

    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    if(!lowercaseRegex.test(password)){
      toast.error("You Should need one Lowercase")
      return

    }

   const uppercaseRegex = /^(?=.*[A-Z]).+$/;
   if(!uppercaseRegex.test(password)){
    toast.error("You Should need one Uppercase")
    return
   }

   if(password.length<6){
    toast.error("Password Should be 6 digit")
   }

    registerUser (email,password)
    .then(res=>{
      navigate("/")
      toast.success("user Register Successfully")
    })
    .catch(error=>
      setErrorMessage(error.message))

  }


  const googleRegisterHandler = ()=>{
    googleLoginBtn()

    .then(res=>{
      navigate("/")
      toast.success ("User Login Successfully")
    })
    .catch(error=>{
      setErrorMessage(error.message)
    })

  }



  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className=" ml-8 mt-4 text-5xl font-bold">Register</h1>
            <form onSubmit={registerHandler} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photourl"
                  name="photourl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             
              
            </form>
            <div>
                <button onClick={googleRegisterHandler} className="btn">Login with Google <FcGoogle /></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
