import React,{useState} from 'react';
import '../App.css';
import axios from "axios";

const Login = ({token,setToken}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = () => {
        setError("");
        setPassword("");
        setUserName("");

        axios({
            url:'https://fakestoreapi.com/auth/login',
            method:'POST',
            data: {
                username: userName,
                password: password,
            },
        }).then(res=> {
            console.log(res.data.token)
            setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
        }).catch(err => {
            console.log(err.response.data);
            setError(err.response.data);
        })
    }

    return (
        <div className="login">
            <div className="login-inputs">
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="username"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                {error && <small>{error}</small>}
                <button onClick={loginHandler}>Login</button>
            </div>
        </div>
    );
};

export default Login;
