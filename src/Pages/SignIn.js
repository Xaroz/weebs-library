import React, { useContext } from "react";
import Input from "../Components/Input";
import { UserContext } from "../Components/UserContext";
import { loginTest } from "../Components/loginTest";

export default function Register() {
  const { setUser } = useContext(UserContext);

  return (
    <div className="container">
      <h1>Sign in to Weeb's Library</h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-6">
          <form className="card p-2">
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
            <button
              onClick={async event => {
                event.preventDefault();
                const user = await loginTest();
                setUser(user);
              }}
              className="btn btn-secondary"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
