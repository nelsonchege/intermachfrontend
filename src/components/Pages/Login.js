import SplitScreen from "../SplitScreen/SplitScreen";
import welcomeImg from '../../images/Group69.svg'
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [emailLogin, setEmailLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    const [error, setError] = useState(false);
    const [formError, setFormError] = useState();
    const history = useHistory();
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            "email": emailLogin,
            "password": passwordLogin
        };
        
        axios.post('http://127.0.0.1:8000/account/login/',user).then(
            res =>{
                localStorage.setItem('jwt',res.data.jwt)
                return history.push("/Home");
            }
        ).catch(
            err =>{
                console.log(err);
                setError(true)
                setFormError(true)
            }
        )

    }
    return ( 
        <SplitScreen
            img={welcomeImg}
            action="Signup"
            actionText="Don't have an account?"
            actionUrl="/Signup"
            formTitle="Login into your account"
            form={[
                <form onSubmit={handleSubmit}>
                {formError && <span className="form-error">{formError}</span>}
                <div className="email">
                    <label>Email</label>
                    <input 
                    type="text"
                    required
                    value = {emailLogin}
                    onChange = {e => setEmailLogin(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input 
                    type="password"
                    required
                    value = {passwordLogin}
                    onChange = {e => setPasswordLogin(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary btn-submit">Login</button>
                {error && <span className="form-error"><br /> {error} <br /> <br /></span> }
            </form>
            ]}
        />
     );
}
 
export default Login;