import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessage = React.createRef();

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    console.log(body);
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <AddMessageForm
                val={props.dialogsPage.newMessageBody}
                onNewMessageChange={onNewMessageChange}
                sendMessage={props.sendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
