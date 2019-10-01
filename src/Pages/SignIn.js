import React, { useContext, useEffect, useState } from "react";
import Input from "../Components/Input";
import { UserContext } from "../Components/UserContext";
import { loginTest } from "../Components/loginTest";

export default function Signin() {
  const { setUser } = useContext(UserContext);

  const initialFormState = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  useEffect(() => {
    document.title = "Sign in";
  });
  return (
    <div className="container">
      <h1>Sign in to Weeb's Library</h1>
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
              labelName="Password"
              typeName="password"
              placeholderName="Enter password"
              handleInputChange = {handleInputChange}
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
