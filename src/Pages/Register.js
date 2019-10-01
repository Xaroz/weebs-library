import React, { useEffect, useState } from "react";
import Input from "../Components/Input";

export default function Register() {
  useEffect(() => {
    document.title = "Register";
  });
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  


  return (
    <div className="container">
      <h1>Register</h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-6">
          <form className="card p-2">
            <Input
              labelName="Email"
              typeName="email"
              placeholderName="Enter email"
              handleInputChange = {handleInputChange}
            />
            <Input
              labelName="Username"
              typeName="username"
              placeholderName="Enter username"
              handleInputChange = {handleInputChange}
            />
            <Input
              labelName="Password"
              typeName="password"
              placeholderName="Enter password"
              handleInputChange = {handleInputChange}
            />
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="form-control"
                placeholder="Confirm Password"     
                name = "confirmPassword"
                onChange = {handleInputChange} 
                required    
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Create an account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
