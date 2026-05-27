import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await axios.post(
        "https://dummyjson.com/auth" + "/login",
        { username, password },
        { withCredentials: true },
      );
      console.log("result,", result);

      dispatch(addUser(result.data));
      return navigate("/feed");
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <div className="flex justify-center">
      <div class="card card-border bg-base-300 w-96 ">
        <div class="card-body">
          <h2 class="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">Username</legend>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">Password</legend>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </fieldset>
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary text-sm" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
