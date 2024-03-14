import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/signup.css";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const token = sessionStorage.getItem("token");

    const handleClick = () => {
        actions.signup(email, password,);
        navigate("/login");
    };

    if (store.token && store.token !== "" && store.token !== undefined) navigate("/");

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark-purple vh-100">
            <div className="bg-secondary rounded text-dark p-4" style={{ maxWidth: "400px" }}>
               


                {store.token && store.token !== "" && store.token !== undefined ? (
                    "You are now signed up!"
                ) : (
                    <form className="text-start mx-1 mx-md-4">

                        <div className="mb-3">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <label htmlFor="email"><strong>Username</strong></label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control rounded-0 rounded"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control rounded-0 rounded"
                            />
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={handleClick} type="button" className="btn btn-dark w-100">
                                <strong>Signup</strong>
                            </button>
                        </div>

                    </form>
                )}
            </div>
        </div>
    );
};
