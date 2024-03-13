import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLoginRedirect = () => {
        navigate('/login'); // Use navigate function with the path to your login page
    };

    return (
        <div className="text-center mt-5">
            <h1>Welcome to Rigo's Universe!</h1>
            <p>
                <img src={rigoImageUrl} alt="Rigo" />
            </p>
            <div className="alert alert-info">
                {store.message || "Loading message from the backend (make sure your python backend is running)..."}
            </div>
            <p>
                This boilerplate comes with lots of documentation:{" "}
                <a href="https://start.4geeksacademy.com/starters/react-flask">
                    Read documentation
                </a>
            </p>
            <button onClick={handleLoginRedirect}>Login</button> {/* Login button */}
        </div>
    );
};