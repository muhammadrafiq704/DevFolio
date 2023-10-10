import React, {useState} from "react";
import {Link} from 'react-router-dom'
function SignUp(){
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[gender, setgender] = useState('');
    const[number, setnumber] = useState('');
    const[password, setpassword] = useState('');

    function handleName(name){
        setname(name.target.value)
    }
    function handleEmail(email){
        setemail(email.target.value)
    }
    function handleGender(gender){
        setgender(gender.target.value)
    }
    function handleNumber(number){
        setnumber(number.target.value)
    }
    function handlePassword(password){
        setpassword(password.target.value)
    }

    function handleSubmit(event){
        alert(`Name ${name} Email ${email} Gender ${gender} Number ${number} Password ${password} your data is submitted`)
        // event.preventDefault();
        // console.log("submitted data");
        // console.log("username:", name);
        // console.log("email:", email);
        // console.log("gender:", gender);
        // console.log("number:", number);
        // console.log("password:", password);
    }

    return(
        <>
         <div className="prevBtn">
            <p>Click here to <Link to='/login' className="link">Back</Link></p>
        </div>
        <div className="SignUpForm">
       
            <h2>REGISTRATION FORM</h2>
            <form action="" >
                <label htmlFor="">Username</label>
                <input 
                type="text"
                name="name"
                placeholder="Enter name" 
                value={name}
                onChange={handleName}
                />
                <label htmlFor="">Email</label>
                <input 
                type="text"
                name="email" 
                placeholder="Enter email" 
                value={email}
                onChange={handleEmail}
                />
                <label htmlFor="">Gender</label>
                <input 
                type="text"
                name="gender" 
                placeholder="Enter gender" 
                value={gender}
                onChange={handleGender}
                />
                <label htmlFor="">Number</label>
                <input 
                type="text"
                name="number" 
                placeholder="Enter number" 
                value={number}
                onChange={handleNumber}
                />
                <label htmlFor="">Password</label>
                <input 
                type="password"
                name="password" 
                placeholder="Enter password" 
                value={password}
                onChange={handlePassword}
                />

                <button onClick={handleSubmit}>REGISTER NOW</button>
                <p>Do you have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>

        </>
    )
}
export default SignUp;
