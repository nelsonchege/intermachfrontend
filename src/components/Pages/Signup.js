import SplitScreen from "../SplitScreen/SplitScreen";
import welcomeImg from '../../images/Group69.svg'
import { useHistory } from "react-router-dom";
import React, { useState } from "react";


const Signup = () => {
    const [emailSignup, setEmailSignup] = useState();
    const [passwordSignup, setPasswordSignup] = useState();
    const [error, setError] = useState(false);
    const [formError, setFormError] = useState();
    const history = useHistory(); 


    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = {
            "email": emailSignup,
            "password": passwordSignup
        };
        await fetch('https://hookbytribe.herokuapp.com/register/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
        }).then(async(res) => {
            if(res.ok){
                const content = await res.json()
                console.log(content)
                return history.push("/CreateProfile");
            }
            else{
                if(res.status === 400){
                    setError('Invalid Email or password')
                }
                else{
                    setFormError('Something went wrong...')
                }
            }
        });
    }

    return ( 
        <SplitScreen
            img={welcomeImg}
            action="Login"
            actionText="have an account?"
            actionUrl="/Login"
            formTitle="Sign in into your account"
            form={[
                <form onSubmit={handleSubmit}>
                {formError && <span className="form-error">{formError}</span>}
                <div className="email">
                    <label>Email</label>
                    <input 
                    type="text"
                    required
                    value = {emailSignup}
                    onChange = {e => setEmailSignup(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input 
                    type="password"
                    required
                    value = {passwordSignup}
                    onChange = {e => setPasswordSignup(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary btn-submit">Signup</button>
                {error && <span className="form-error"><br /> {error} <br /> <br /></span> }
            </form>
            ]}
        />
     );
}
 
export default Signup;