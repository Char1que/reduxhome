import {combineReducers, createStore} from "redux";
import {messageReducer} from "./reducer/messageReducer/messageReducer";
import {chatReducer} from "./reducer/chatReducer/chatReducer";

export const reducer = combineReducers({
    messagees: messageReducer,
    chats: chatReducer
})

export const store = createStore(reducer)