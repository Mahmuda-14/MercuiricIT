import {   useContext, useState } from "react";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
  
      // sign in user
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          toast("Successfully logged in");
        //   setTimeout(() => {
        //     navigate(location?.state ? location.state : "/");
            
        //   }, 2000);
        })
        .catch((error) => {
          console.error(error);
          toast.error("email or password don't match.please try again");
        });
    };
    return (
        // https://extremelab.tech/assets/images/bg-01.jpg
        <div className="flex flex-col-reverse lg:flex-row justify-evenly h-screen items-center">
            {/* left side  */}
        <div className="w-1/2 relative h-full flex items-center justify-center bg-primeColor bg-opacity-25">
          <img
            className="w-4/5 opacity-10 absolute"
            src="https://extremelab.tech/assets/images/bg-01.jpg"
            alt="logo"
          />
          <h2 className="text-9xl tracking-wider font-stylish text-blue-700">
            <span className=" font-stylish ">Extreme</span>Lab
          </h2>
        </div>

        {/* right side */}
            <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-blue-700">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full bg-slate-200 max-w-sm shadow-2xl">
          <div className="card-body ">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email<sup className="text-blue-700">*</sup>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="border-blue-700 input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password<sup className="text-blue-700">*</sup>
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="border-blue-700 input input-bordered"
                  required
                />
                <span className="absolute bottom-52 right-12">
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <AiOutlineEye></AiOutlineEye>
                    ) : (
                      <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                    )}
                  </span>
                </span>
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-700 border-blue-700 text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
          
  
          <p className="p-3 text-center">
            New here? Please
            <Link
            to="/register">
              <button className="btn btn-link text-blue-700">Register</button>
 </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
      </div>
    );
  };
export default Login;