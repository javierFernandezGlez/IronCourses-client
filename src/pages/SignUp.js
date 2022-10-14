import React from "react";
import { useContext, useState } from 'react';
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { post } from "../authService/authService";
import ConfirmPassword from "../components/ConfirmPassword";
import Email from "../components/Email";
import Password from "../components/Password";
import Username from "../components/Username";
import {Alert, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const SignUp = () => {
  const { authenticateUser, setIsLoading, setMessage, message } = 
useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEducator, setIsEducator] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);  const navigate = useNavigate();
//   const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
// [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    
    const regexExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  
    const checkError = (e) => {

        setIsLoading(true);
        e.preventDefault();

        if (username.length < 4) {
            setMessage("username must be at least four characters");
            setSuccessMessage(false);
            setIsLoading(false);
            return;
        }
        if (!regexExp.test(email)) { 
            setMessage("that is not a valid email address");
            setSuccessMessage(false);
            setIsLoading(false);
            return;
        } 
        if (password.length < 6) {
            setMessage("password must be at least 6 characters");
            setSuccessMessage(false);
            setIsLoading(false);
            return;
        } 
        if (password === "password") {
            setMessage("your password can't be 'password'");
            setIsLoading(false);
            setSuccessMessage(false);
            return;
        } 
        if (password !== confirmPassword) {
            setMessage("your password didn't match");
            setSuccessMessage(false);
            setIsLoading(false);
            return;
        }
        
        console.log({
            username: username,
            password: password,
            email: email,
            educator: isEducator
        })
        post("/users/signup", {
            username: username,
            password: password,
            email: email,
            educator: isEducator
          })
            .then((results) => {
              localStorage.setItem("authToken", results.data.token);
              localStorage.setItem("id", results.data.id);
              setMessage(`Welcome ${username}!`);
              setSuccessMessage(true);
              navigate("/");
            })
            .catch((err) => {
              setMessage(err.response.data.message);
              console.log("Something went wrong", err.message);
            })
            .finally(() => {
              authenticateUser();
            });
    };
    
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={checkError}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <Link to="/login">Log In</Link> 
                    </div>
                    <Username setUsername={setUsername} />
                    <Email setEmail={setEmail} />
                    <Password setPassword={setPassword} />
                    <ConfirmPassword setConfirmPassword={setConfirmPassword} />
                    <div class="text-center" style={{marginTop: "5%"}}>
                        <h6>Are you an educator?</h6>
                        <BootstrapSwitchButton
                            style={{display: "flex", alignItems: "center"}}
                            width={75}
                            checked={isEducator}
                            onlabel='Yes'
                            offlabel='No'
                            onstyle="dark"
                            onChange={(checked) => {
                                console.log("The value of checked is ", checked);
                                setIsEducator(checked)
                            }}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" className="btn btn-dark">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
  );
};

export default SignUp;