import React from "react";
import { Form, Field } from "react-final-form";
const LoginForm = (props) => {
  return (
    <Form onSubmit={(formObj) => {}}>
      {({ handleSubmit }) => {
        <form onSubmit={handleSubmit}>
          <Field name="name" />
          {({ input }) => <input type="text" placeholder="Login" {...input} />}
          <Field />
          <Field name="name" />
          {({ input }) => (
            <input type="password" placeholder="Password" {...input} />
          )}
          <Field />

          <button type="sumbit">Sumbit</button>
        </form>;
      }}
    </Form>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
// const Login = (props) => {
//   return (
//     <Form onSubmit={(formObj) => {}}>
//       {({ handleSubmit }) => {
//         <form onSubmit={handleSubmit}>
//           <Field name="name" />
//           {({ input }) => <input type="text" placeholder="Login" {...input} />}
//           <Field />
//           <Field name="name" />
//           {({ input }) => (
//             <input type="password" placeholder="Password" {...input} />
//           )}
//           <Field />

//           <button type="sumbit">Sumbit</button>
//         </form>;
//       }}
//     </Form>
//   );
// };
// export default Login;
