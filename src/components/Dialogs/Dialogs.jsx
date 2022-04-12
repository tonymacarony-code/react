import { React } from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Tony" },
    { id: 2, name: "Aleksi" },
    { id: 3, name: "Yasen" },
    { id: 4, name: "S@nya" },
  ];
  let messagesData = [
    { id: 1, message: "Спасибо Леша" },
    { id: 2, message: "С тебя 5700!" },
    { id: 3, message: "Yasen" },
    { id: 4, message: "S@nya" },
  ];

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>

        <div className={s.messages}>
          <Message message={messagesData[0].message} id={messagesData[0].id} />
          <Message message={messagesData[1].message} id={messagesData[1].id} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
