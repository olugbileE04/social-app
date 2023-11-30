import { Link, useNavigate } from "react-router-dom"
import firebase from '../../configs/firebaseConfig';
import "./login.scss"
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (user) {
        alert("login successfully");
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quod quam impedit culpa officiis cupiditate accusamus expedita eos enim tempora ullam molestias quia voluptatem, ipsum eveniet! Quo repellat possimus expedita?</p>
                <span>Don't have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h2>Login</h2>
               <form >
                <input type="text" value={email}placeholder="Username"onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} placeholder="Password"onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={submit} >Login</button>
               </form>

            </div>
        </div>
    </div>
  )
}
