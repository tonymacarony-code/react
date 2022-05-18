import React from "react";
import { Field, Formik } from "formik";

const AddMessageForm = (props) => {
  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        props.sendMessage(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              value={props.value}
              onChange={(e) => props.onNewMessageChange(e)}
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"enter text"}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </Formik>
  );
};
export default AddMessageForm;
