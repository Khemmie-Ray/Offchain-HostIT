import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import heroImg from "../assets/web3lagos.jpeg";
import logo from "../assets/hostit.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => { 
    e.preventDefault();
    const storedEmail = import.meta.env.VITE_GETUSER;
    const storedPassword = import.meta.env.VITE_GET_PASSWORD;

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("authenticated", true);
      navigate('/dashboard'); 
    } else {
      toast.error("Invalid Credentials", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex justify-between">
      <div
        className="hidden lg:flex md:flex w-[100%] lg:w-[50%] md:w-[50%] bg-[#000]/50 bg-cover bg-center bg-blend-overlay h-[100vh]"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="w-[100%] lg:w-[50%] md:w-[50%] lg:p-6 md:p-6 flex flex-col p-8 h-[100vh]">
        <img src={logo} alt="Logo" className="w-[150px] mt-6" />
        <div className="w-[100%] lg:w-[80%] md:w-[80%] mx-auto flex flex-col my-auto">
          <h1 className="text-[24px] lg:text-[40px] md:text-[40px] font-[500] mb-12">Welcome Back Admin</h1>
          <input
            type="text"
            placeholder="Email address"
            className="border border-[#dadada] rounded-lg my-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="border border-[#dadada] rounded-lg my-4 p-4 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? <FaEyeSlash className="text-2xl text-[#a3a3a3]" /> : <FaEye className="text-2xl text-[#a3a3a3]" />}
            </div>
          </div>
          <button 
            className="bg-[#0D0042] text-[#11EBF2] p-4 rounded-lg text-[20px] font-[600] hover:bg-[#11EBF2] hover:text-[#0D0042]"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;