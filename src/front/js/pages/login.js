import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	
	const token = sessionStorage.getItem("token");
	console.log("this is your token",token)
    const handleClick = () => {
		actions.login(email, password);
		history.push("/")
};


	return (
		<div className="text-center mt-5">

			<h1>Login</h1>
            { token && token !="" && token != undefined ? ("You are logged in with this token" + token
			

			) : (

			<form>
			<input type="email" placeholder="email" value={email} onChange={e => setEmail (e.target.value)}/>
			<input type="password"placeholder="password" value={password} onChange={e => setPassword (e.target.value)}/>
			<button onClick={handleClick}>Login</button>
			
            </form>
			)}
		</div>
           
	);
};
