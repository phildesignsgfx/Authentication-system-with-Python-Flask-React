import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../../styles/home.css";

export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Initialize useNavigate
    const token = store.token;
    const message = store.message;

    useEffect(() => {
        // If token exists, get the message
        if (token) {
            actions.getMessage();
        }
    }, [token, actions]);

    const handleLogout = () => {
        actions.logOut(); // Calls the logout action
        navigate("/"); // Redirects to the home page
    };

    return (
        <div className="text-center mt-5">
            <h1>Welcome to your Account</h1>
            {token ? <h1>Secrets exposed</h1> : <h1>Welcome to your page</h1>}
            {message ? <div className="alert alert-info">{message}</div> : <div className="alert alert-info">Welcome</div>}
            <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
        </div>
    );
};
