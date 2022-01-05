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
    <>
      <div className="login-page">
        <div className="flex justify-center items-center h-screen form-frosty  ">
          <form onSubmit={submitForm} className=" w-8/12 lg:w-4/12  ">
            <div className=" text-center text-6xl md:text-9xl">
              P
              <Link to="/" className=" text-red-400 link">
                eppit
              </Link>
            </div>
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
            <div class="divider"></div>
            <div class="form-control ">
              <button
                class="btn btn-primary btn-active my-3"
                aria-pressed="true"
                type="submit"
              >
                Login
              </button>
              <Link
                class="btn btn-error btn-active  my-3"
                aria-pressed="true"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
        {/* <footer className="bg-red-300 ">BRUH</footer> */}
      </div>
    </>
  );
}
