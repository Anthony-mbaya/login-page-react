import React from "react";
import { useForm } from "react-hook-form"; 

function Login({ onSignUpClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmitFun(data) {
    {
      /*userData retrieved from the key(data.email in the registartion form)*/
    }
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        alert("You have successful logged in.");
      } else {
        alert("email or password not matching");
      }
    } else {
      alert("email or password not recorded");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFun)} className="bg-dynamicBg bg-cover bg-center bg-blend-overlay bg-slate-400 fadebg text-white font-bold w-fit mx-auto my-20 px-10 py-20 rounded-xl shadow-2xl shadow-black ">
      <div id="login" className="flex flex-col gap-4 sm:gap-6 items-center justify-center">
        <h1 className="text-[2em] sm:text-[2.5em]">Student Login Form</h1>
        <input
          type="email"
          id="email"
          placeholder="Student Email"
          {...register("email")}
          className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password")}
          className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
        />
        <input type={"submit"} id="submit" className="px-5 py-3 rounded-2xl bg-black text-orange-600 sm:text-[1.2em]" />
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={onSignUpClick} className="text-orange-600 underline" >
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
}

export default Login;
