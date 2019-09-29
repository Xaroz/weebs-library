import React from "react";
import Input from "../Components/Input";

export default function Register() {
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
            />
            <Input
              labelName="Username"
              typeName="username"
              placeholderName="Enter username"
            />
            <Input
              labelName="Password"
              typeName="password"
              placeholderName="Enter password"
            />
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="form-control"
                placeholder="Confirm Password"
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
