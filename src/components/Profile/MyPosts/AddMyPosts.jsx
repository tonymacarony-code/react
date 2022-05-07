import React from "react";
import { Form, Field, Formik } from "formik";

const AddMyPost = (props) => {
  let addNewPost = (values) => {
    props.addPost(values);
  };

  return (
    <Formik
      initialValues={{
        newPostText: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newPostText);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newPostText"}
              as={"textarea"}
              placeholder={"enter text"}
            />
          </div>

          <button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  );
};
export default AddMyPost;
