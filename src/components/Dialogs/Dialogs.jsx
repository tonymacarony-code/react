import React, { Component } from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageBody = props.state.newMessageBody;
  let newMessage = React.createRef();
  let textMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                ref={newMessage}
                placeholder="Enter here!"
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
