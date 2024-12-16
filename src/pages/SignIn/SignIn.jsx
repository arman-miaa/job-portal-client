import Lottie from "lottie-react";
import loginLottieData from '../../assets/lottie/login.json'
import { useContext } from "react"; 
import AuthContext from "../../context/Authcontext/AuthContext";
import SocialLogin from "../Shered/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const from = location?.state || '/';
  // console.log(from);
    const { signInUser } = useContext(AuthContext);
     const handleSignIn = (e) => {
       e.preventDefault();
       const form = e.target;
       const email = form.email.value;
       const password = form.password.value;
        //  console.log(email, password);
         signInUser(email, password)
             .then(data => {
               console.log('sign in ', data.user.email);
               const user = { email: email };
               axios.post("http://localhost:3000/jwt", user, {
                 withCredentials:true})
                 .then(res => {
                 console.log(res.data);
               })
              //  navigate(from)
             })
             .catch(error => {
             console.log('ERROR', error);
         })
   
     };
    return (
      <div>
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center ">
                <Lottie animationData={loginLottieData}></Lottie>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                  <h1 className="text-5xl font-bold">LogIn now!</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
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
                    <button className="btn btn-primary">LogIn</button>
                  </div>
                </form>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;