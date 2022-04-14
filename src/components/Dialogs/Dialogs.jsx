import React, { Component } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessage = React.createRef();
  let textMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea ref={newMessage}></textarea>
        <button onClick={textMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
