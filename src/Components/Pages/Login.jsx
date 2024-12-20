import Lottie from "lottie-react";
import loginLottieData from '../../assets/Lotties/login.json'
import { useState } from "react";
import { useContext } from "react";
import { authorizedContext } from "../AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {loginUser} = useContext(authorizedContext)
    const location = useLocation()
    console.log(location);
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate("/")
    const loginHandler = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value

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

        loginUser(email,password)
        .then(res=>{
              navigate("/")
              toast.success("user Login Successfully")
            })
            .catch(error=>
              setErrorMessage(error.message))



    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-[500px]">
            <Lottie animationData={loginLottieData}></Lottie>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Login now</h1>
            <form onSubmit={loginHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name= "email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name= "password"
                  placeholder="password"
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
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>

            <button
          
            className="btn shadow-xl text-black font-semibold gap-3 p-2 text-lg mt-3"
          >
            <FcGoogle className="text-2xl" />
            Login With Google
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
