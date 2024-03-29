import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import img from "../img/netflix.jpg";
const LoginPage = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [inputText, setTextInput] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    // loginQuery(inputText.email, inputText.password);

    try {
      await login(inputText.email, inputText.password);
      nav("/homepage/movies");
      setTextInput({
        email: "",
        password: "",
      });
    } catch (e) {
      alert(e.message);
    }
  };
  // console.log(user);
  return (
    <div className="h-screen w-full bg-[#191920] flex items-center justify-center lg:grid  lg:gap-20 lg:grid-cols-12 font-outfit relative">
      
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-black to-tranparent  blur-xl"></div>
	  
	  <div className="col-start-9 col-span-4 px-8 flex items-center justify-center w-full h-full box-border ">
        <form
          onSubmit={handleSubmit}
          className=" h-[50%] lg:h-[80%] lg:w-96 sm:w-52  rounded-xl  box-border py-6 px-10 bg-[#111115] flex flex-col items-center justify-center space-y-8    drop-shadow-xl pt-20 text-white"
        >
          <input
            autoComplete="off"
            required
            type="text"
            className="h-10 rounded-lg  border-none bg-[#191920]  w-full placeholder:text-md placeholder:capitalize  placeholder:font-medium placeholder:tracking-wide placeholder:text-gray-400 px-4 box-border text-gray-900"
            placeholder="username"
            value={inputText.email}
            onChange={(e) =>
              setTextInput({ ...inputText, email: e.target.value })
            }
          />
          <input
            autoComplete="off"
            placeholder="password"
            type="password"
            className="h-10 rounded-lg   border-none bg-[#191920]  w-full placeholder:text-md placeholder:capitalize placeholder:font-medium placeholder:tracking-wide placeholder:text-gray-400 px-4 box-border text-gray-900"
            value={inputText.password}
            onChange={(e) =>
              setTextInput({ ...inputText, password: e.target.value })
            }
          />
          <input
            type="submit"
            className="bg-red-500 shadow-primary-400 shadow-lg  border-none py-2 px-8 rounded-lg cursor-pointer text-white  font-outfit text-xs capitalize tracking-wide"
            value="sign in"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
