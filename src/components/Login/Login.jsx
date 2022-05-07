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
        // const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        // return errors;
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

// import { Form, Field } from "react-final-form";
// import { login } from './../../redux/auth-reducer';
// const LoginForm = (props) => {
// //   const onSubmit = (values) => {};
// //   const validate = (values) => {
// //     console.log(values);
// //   };

//   return (
//     <Form
//       onSubmit={onSubmit}
//       validate={validate}
//       render={({ handleSubmit }) => (
//         <form onSubmit={handleSubmit}>
//           <Field name="firstName" component="input" placeholder="First Name" />
//           <Field name="password" component="input" placeholder="Password" />

//           <button type="sumbit">Sumbit</button>
//         </form>
//       )}
//     ></Form>
//   );
// };

// const Login = (props) => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <LoginForm />
//     </div>
//   );
// };

// export default Login;
