"use client";

import { useState, useRef } from "react";
import { addUserToLocalStorage } from "@/utils/localStorage";
import axios from "axios";
import { useRouter } from "next/navigation"; // App Router
import { toast } from "react-toastify";
import { API_URL } from "@/utils/constant";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSigning, setIsSigning] = useState(false);
    const [error, setError] = useState("");

    const emailRef = useRef(null);

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setError("");


    //   };

    const onLogin = async (e) => {
        e.preventDefault();
        setIsSigning(true);
        setLoading(true);
        await axios
            .post(`${API_URL}/api/v1/auth/login`, {
                email,
                password,
                isRemember: true,
                deviceInformation: "table",
                devide: "tablet"
            })
            .then((res) => {
                setIsSigning(false);
                const data = res.data;
                addUserToLocalStorage(data);
                router.push("/");  // Redirect to products page
            })
            .catch((err) => {
                setIsSigning(false);
                setLoading(false);
                emailRef.current.focus();
                const error = err.response.data.errors[0];
                toast.error(error.msg);
            });
    };

    return (
        <div className="container is-flex is-justify-content-center is-align-items-center" style={{ minHeight: "100vh" }}>
            <div className="box" style={{ width: "400px" }}>
                <h2 className="title is-4 has-text-centered">Login</h2>

                {error && <p className="notification is-danger is-light">{error}</p>}

                <form onSubmit={onLogin}>
                    {/* Email Field */}
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                ref={emailRef}
                                className="input"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="field">
                        <div className="control">
                            <button style={{ backgroundColor: "#fa6900" }} className={`button is-primary is-fullwidth ${loading ? "is-loading" : ""}`} type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </form>

                {/* Forgot Password & Signup Links */}
                <div className="has-text-centered">
                    <p className="is-size-7">
                        <a href="#">Forgot password?</a>
                    </p>
                    <p className="is-size-7">
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
