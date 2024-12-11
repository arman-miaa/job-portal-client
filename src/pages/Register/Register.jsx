import Lottie from "lottie-react";

import registerlottieData from '../../assets/lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../context/Authcontext/AuthContext";
import SocialLogin from "../Shered/SocialLogin";
const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        //* password validation
        //* show password validation error
        createUser(email, password)
            .then(data => {
            console.log(data.user);
            })
            .catch(error => {
            console.log('ERROR', error);
        })
    }
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center ">
            <Lottie animationData={registerlottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;