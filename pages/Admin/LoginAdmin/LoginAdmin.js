import React from "react";
import { LoginForm } from "../../../Components/Admin";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <h1>Ingreso al Panel </h1>
        <LoginForm />
      </div>
    </div>
  );
}
