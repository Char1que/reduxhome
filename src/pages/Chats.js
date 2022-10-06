import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Chats = () => {
    const chats = useSelector (state => state.chats.chats)
    return (
        <div>
            {chats.map((chat)=>{
                return (
                    <Link key={chat.id} to={'/message/${chat.id}'}>
                        {chat.name}
                    </Link>
                )
            })}
        </div>
    );
};

export default Chats;