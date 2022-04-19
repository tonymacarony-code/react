const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Tony",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
    },
    {
      id: 2,
      name: "Aleksi",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
    },
    {
      id: 3,
      name: "Yasen",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
    },
    {
      id: 4,
      name: "S@nya",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
    },
  ],
  messages: [
    { id: 1, message: "Спасибо Леша" },
    { id: 2, message: "С тебя 5700!" },
    { id: 3, message: "gre korm suka" },
    { id: 4, message: "dolboeby blayt'" },
  ],
  newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
