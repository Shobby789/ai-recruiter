import React, { useState } from "react";
import TextField from "../Common/TextField";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const handleOnChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signUp data >>>", data);
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-start gap-5 bg-white md:w-2/3 lg:w-1/2 p-[1rem] md:p-[2rem] lg:p-[3rem] rounded-3xl"
    >
      <div className="w-full mb-3">
        <h2 className="page-heading">Sign Up</h2>
      </div>
      <TextField
        labelName={"Full Name"}
        inputType={"text"}
        value={data.fullName}
        id={"fullName"}
        name={"fullName"}
        placeholder={"John Dow"}
        onChange={handleOnChange}
      />
      <TextField
        labelName={"Email"}
        inputType={"email"}
        value={data.email}
        id={"email"}
        name={"email"}
        placeholder={"johndoe@gmail.com"}
        onChange={handleOnChange}
      />

      <div className="w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <label htmlFor={"password"} className="text-sm font-semibold">
            Password
          </label>
          <div className="flex items-center justify-between gap-3 w-full border rounded-lg pr-3">
            <input
              type={showPass ? "text" : "password"}
              id={"password"}
              name={"password"}
              value={data.password}
              placeholder={""}
              onChange={handleOnChange}
              className="w-full border-none rounded-lg p-3 text-sm text-neutral-800 outline-none placeholder:text-gray-500"
            />
            <button type="button" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? (
                <FaRegEye className="text-gray-700" />
              ) : (
                <FaRegEyeSlash className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button type="submit" className="btn text-sm w-full">
          Sign Up
        </button>
      </div>
      <p className="text-center w-full text-sm font-medium">
        Already have an account?{" "}
        <Link to={"/login"} className="font-bold">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
