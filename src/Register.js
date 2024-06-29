import React from "react";
import { useForm } from "react-hook-form";
//import "./Register.css";

function Register({ onLoginClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        fname: data.fname,
        lname: data.lname,
        password: data.password,
      })
    );
    console.log(JSON.parse(localStorage.getItem(data.email)));
  }
  return (
    <div id="registration" className="w-fit mx-auto my-20">
      <form className="w-fit bg-dynamicBg bg-cover bg-blend-overlay bg-center bg-slate-400 rounded-xl px-16 py-4 shadow-2xl shadow-black" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-fit flex justify-around">
          {/*left panel on the display for credentials*/}
          <div className="w-fit  flex flex-col gap-4 items-center justify-center px-3 py-6">
            <h2 className="text-[2em] sm:text-[2.5em]">Student Details</h2>

            <input
              type="text"
              {...register("fname")}
              name="fname"
              placeholder="First Name"
              className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
            />

            <input
              type="text"
              {...register("lname")}
              name="lname"
              placeholder="Last Name"
              className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
            />

            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="Email:example@gmail.com"
              className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
            />

            <input type="number" name="number" placeholder="Phone Number" className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]" />

            <input
              type="password"
              {...register("password")}
              name="password"
              placeholder="Password"
              className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
            />
          </div>

          {/*right panel having school data*/}
          <div className="w-fit flex flex-col gap-4 items-center justify-center px-3 py-6 bg-blue-950 rounded-xl my-14 ">
            <h2 className="text-[2em] sm:text-[2.5em]">School Details</h2>
            <input type="text" name="school" className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"  placeholder="Programme School" />

            <input type="text" name="department" className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]" placeholder="Department" />

            <input type="text" name="course" className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]" placeholder="Course" />

            <input type="text" name="regNo" className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]" placeholder="Registration number" />

            <input
              type="text"
              name="course"
              placeholder="Year of Administration" className="px-5 py-3 rounded-2xl outline-none text-black sm:text-[1.2em]"
            />

            <p>
              <input type="checkbox" name="check" /> I agree with the terms and
              conditions
            </p>
          </div>
          </div>
          <input type={"submit"} className="w-full text-center px-5 py-3 rounded-2xl bg-black text-orange-600 sm:text-[1.2em] mx-auto" />

          <p className="w-full text-center">
            Already have an account?{" "}
            <a href="#" onClick={onLoginClick} className="text-orange-600 underline"> 
              Back to Login
            </a>
          </p>
        
      </form>
    </div>
  );
}

export default Register;
