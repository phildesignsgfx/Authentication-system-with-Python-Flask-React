import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const token = store.token
    const message = store.message


    useEffect(()=>{
        actions.getMessage();
    },[token])

	useEffect(() => {
        if (token) {
            actions.logout(); // Call logout action when token exists (user is logged in)
            history.push("/login"); // Redirect to login page after logout
        }

    }, [token, actions, history]);
	
	return (
		<div className="text-center mt-5">
        <h1>Welcome to your Account</h1>    
		{token && token!="" && token != undefined ? <h1>Secrets exposed</h1> : <h1>Welcome to your page</h1>}
        {message && message !="" && message!=undefined ? <div className="alert alert-info">{message}</div> : <div className="alert alert-info">Si estas logeado podras ver la sección secreta</div>}
      
		</div>	
	);
};