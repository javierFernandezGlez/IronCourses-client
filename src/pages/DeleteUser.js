import React from "react";
import {useContext} from "react";
import { AuthContext } from "../contexts/auth.context";
import Password from "../components/Password";
import ConfirmPassword from "../components/ConfirmPassword";
import {post} from "../authService/authService";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function DeleteUser() {
    const {setIsLoading, setMessage, setUser} = useContext(AuthContext);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const checkError = (e) => {
        setIsLoading(true);
        e.preventDefault();

        if(password !== confirmPassword) {
            setMessage("your password didn't match");
            setIsLoading(false);
        }
        else {
            post("/users/delete-user", {
                password: password,
            })
                .then((results) => {
                    setUser(null);
                    localStorage.clear();
                    setMessage("user deleted");
                    navigate("/");
                })
                .catch((err) => {
                    console.log("Something went wrong", err.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={checkError}>
                <div className="Auth-form-content" >
                    <h1 className="Auth-form-title">Delete User</h1>
                    
                        <Password setPassword={setPassword} />
                        <ConfirmPassword setConfirmPassword={setConfirmPassword}/>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-dark">Delete</button>
                        </div>
                </div>
            </form>
        </div>
    );
}

export default DeleteUser;