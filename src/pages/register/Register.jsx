import { Link } from "react-router-dom"
import firebase from '../../configs/firebaseConfig'
import "./register.scss"
import { useState } from "react"



 const Register = () => {
  const[name, setName]= useState('')
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const submit = async (e) =>{
    e.preventDefault()
    try{
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      if(user){
        alert("Account Creates successfully")
      }

    }catch(error){
      alert(error)

    }
  }
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Lafe Social..</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quod quam impedit culpa officiis cupiditate accusamus expedita eos enim tempora ullam molestias quia voluptatem, ipsum eveniet! Quo repellat possimus expedita?</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
              
            </div>
            <div className="right">
                <h2>Register</h2>
               <form >
                <input type="text" value={name} placeholder="Username" onChange={(e)=> setName(e.target.value)}/>
                <input type="email" value={email} placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" value={password} placeholder="Password"onChange={(e)=> setPassword(e.target.value)}/>
                <input type="text" placeholder="Name"/>
                <button onClick={submit}>Register</button>
               </form>

            </div>
        </div>
    </div>
  )
}
export default Register;