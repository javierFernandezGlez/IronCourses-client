import React from "react";
import { useContext } from 'react';
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { post } from "../authService/authService";
import Username from "../components/Username";
import Password from "../components/Password";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
const Login = () => {
  const { authenticateUser, setIsLoading, setMessage } = useContext(AuthContext)
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const submit= (e) => {
    setIsLoading(true); 
    e.preventDefault();
    post("/users/login", {
        username: username,
        password: password
    })
      .then((results) => {
        localStorage.setItem("authToken", results.data.token);
        localStorage.setItem("id", results.data.id);
        setMessage(results.data.message);
        navigate("/");
      })
      .catch((err) => {
        setMessage(err.response.data.message)
        console.log("Something went wrong", err.message);
        setIsLoading(false);
      })
      .finally(() => {
        authenticateUser();
      });
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content" >
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
                Not registered yet?{" "}
                <Link to="/signup">Sign Up</Link> 
            </div>
          <Username setUsername={setUsername} />
          <Password setPassword={setPassword} />
          <div className="d-grid gap-2 mt-3">
            <Button type="submit" className="btn btn-dark">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;

