import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const displayName = e.target.name.value;
      const photoURL = e.target.img.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      const profile = {
        displayName: displayName,
        photoURL: photoURL,
      };
  
      console.log(profile, email, password);
      // password validation
      if (password.length < 6) {
        return toast("Password should be at least 6 characters long.");
      } else if (!/(?=.*[A-Z])/.test(password)) {
        return toast("Include at least one uppercase letter.");
      } else if (!/(?=.*[!@#$%^&*()_+{}|:<>?])/.test(password)) {
        return toast("Include at least one special characters.");
      }
  
      // sign in user
  
      const result = await createUser(profile, email, password)
        .then(async (result) => {
          console.log(result);
       })
        .catch((error) => console.log("error from sign up", error));
      toast("Congratulations,registration successful");
      
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-evenly h-screen items-center">
            {/* right side  */}
        <div className="w-1/2 relative h-full flex items-center justify-center bg-primeColor bg-opacity-25">
          <img
            className="w-4/5 opacity-10 absolute"
            src="https://extremelab.tech/assets/images/bg-01.jpg"
            alt="logo"
          />
          <h2 className="text-9xl tracking-wider font-stylish">
            <span className="text-primeColor font-stylish ">Extreme</span>Lab
          </h2>
        </div>

        {/* left side */}
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-blue-700">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-slate-200">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Name<sup className="text-blue-700">*</sup>
                    </span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="name"
                    className="border-bluetext-blue-700 input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="photoURL"
                    name="img"
                    placeholder="Image"
                    className="border-bluetext-blue-700 input input-bordered"
                  />
                </div>
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
                    className="border-blue-700 text-blue-700 input input-bordered"
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
                    className="border-blue-700 text-blue-700 input input-bordered relative"
                    required
                  />
                  <span className="absolute bottom-44 right-12">
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AiOutlineEye></AiOutlineEye>
                      ) : (
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                      )}
                    </span>
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-700 border-blue-700 text-white">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <p className="p-3 text-center">
              Already have an account? Please
              <Link to="/login">
                <button className="btn btn-link text-blue-700">login</button>
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};
export default Register;