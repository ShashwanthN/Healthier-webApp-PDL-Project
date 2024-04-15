import React from "react";
import RunnningLogin from "../assets/RunningLogin.jpg";
import bg from "../assets/bg3.jpg"
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple overflow-hidden">
        <div className="absolute h-full w-full"> <img className="aboslute h-full flex w-full" src={bg}></img></div> 
      <div className="flex z-10 justify-between border border-bgTertiary shadow-xl items-center bg-bgSecondary w-3/4">
        <div className="w-full">
          <img src={RunnningLogin} className="w-full h-full" alt=""></img>
        </div>
        <div className="w-full max-w-1/2">
          <div className="text-7xl px-8 opacity-90 z-0 font-bold  text-bgAccent">Fitter.<span className="text-3xl opacity-30">Happier.</span></div>
          <form className="bg-red h-full rounded-r px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 ">
              <label
                className="block text-gray-dark text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-dark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-dark mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
              />
              <p className="text-red text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
                <Link to="/">
              <button
                className="bg-bgAccent hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button></Link>
              <a
                className="inline-block align-baseline font-bold text-sm text-BorderCol hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <Link to="/Register"><div
                className="flex pt-4 items-center justify-center font-bold text-sm text-bgTertiary hover:text-blue-darker"
                href="#"
              >
                Don't have and account? Create one!
              </div></Link>
          </form>
         
          <p className="text-center text-divider text-xs">
            ©2024 Healthier Corp. All rights reserved.
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default Login;
