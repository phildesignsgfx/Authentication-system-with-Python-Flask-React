import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook
  const token = sessionStorage.getItem("token");
  console.log("this is your token", token);

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await actions.login(email, password); // Assuming `login` returns a promise
    // After login, check if the token exists and possibly redirect
    const updatedToken = sessionStorage.getItem("token");
    if (updatedToken) {
      navigate("/path-after-login"); // Adjust the path as needed, use navigate instead of history.push
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {token && token !== "" && token !== undefined ? (
        "You are logged in with this token" + token
      ) : (
        <form>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleClick}>Login</button>
        </form>
      )}
    </div>
  );
};