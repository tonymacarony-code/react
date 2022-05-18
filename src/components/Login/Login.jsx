import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidations/LoginFormSchema";
import { connect } from "react-redux";
import { login } from "./../../redux/auth-reducer";
const Login = (props) => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validate={(values) => {
        return {};
      }}
      onSubmit={(values) => {
        console.log(values);
        props.login(values.email, values.password, values.rememberMe);
      }}
      validationSchema={loginFormSchema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field type={"text"} name={"email"} placeholder={"e-mail"} />
          </div>
          <ErrorMessage name="email" component="div" />

          <div>
            <Field
              type={"password"}
              name={"password"}
              placeholder={"password"}
            />
          </div>
          <ErrorMessage name="password" component="div" />

          <div>
            <Field type={"checkbox"} name={"rememberMe"} />
            <label htmlFor={"rememberMe"}> remember me </label>
          </div>
          <button type="submit">Log in</button>
        </form>
      )}
    </Formik>
  </div>
);

export default connect(null, { login })(Login);
