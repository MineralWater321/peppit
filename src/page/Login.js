import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import picture from "../assets/NEW.png";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function submitForm(e) {
    e.preventDefault();
    console.log("submitted ");
    console.log("__________");
    console.log(username);
    console.log(password);
  }

  return (
    <div className="login-page">
      <div className="flex justify-center items-center">
        <form onSubmit={() => submitForm()} className="md:w-128 w-96 mx-3 my-4 md:my-12">
          {/* <div className="text-center text-4xl md:text-6xl">
            P
            <span className="text-red-400">
              eppit
            </span>
          </div> */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-3xl">Username</span>
            </label>
            <input
              autoComplete="yes"
              type="text"
              placeholder="Username"
              className="input input-bordered "
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control  ">
            <label className="label ">
              <span className="label-text text-3xl">Password</span>
            </label>

            <input
              type="password"
              title="Enter an ID consisting of 4-8 hexadecimal digits"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-autocomplete="list"
              autoComplete="current-password"
              placeholder="Password"
              className="input input-bordered  "
              minLength="8"
              required
            />
          </div>
          <div className="divider"></div>
          <div className="form-control ">
            <button
              className="btn btn-primary btn-active my-3"
              aria-pressed="true"
              type="submit"
            >
              Login
            </button>
            <Link
              className="btn btn-accent btn-active  my-3"
              aria-pressed="true"
              to="/"
            >
              New User? Sign Up Here
            </Link>
          </div>
        </form>
      </div>
      {/* <footer className="bg-red-300 ">BRUH</footer> */}
    </div>
  );
}
