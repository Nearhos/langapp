
import React, { useRef, useState } from 'react';
import './Chat.css';
import axios from "axios";

function Chat() {
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("test submit");

    const header = {
      Accept: "application/json",
    }

    setMessages([
      ...messages,
      
    ]);

    

    axios.post("http://localhost:4000/sendmessage", {message: input}, header)
    .then((response) => {
      console.log(response);
      setMessages([
        ...messages,
        {
          type: "sent",
          message: input
        },
        {
          type: "received",
          message: response.data.message
        }
      ]);
      setInput("");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  return (<>
    <main className="chatbox">
      {messages.map((message) => {
        return <p className={message.type}>{message.message}</p>;
      })}
    </main>

    <form onSubmit={onSubmit}>
  
    <button type="submit" >lang</button>
      <input placeholder="text" onChange={handleChange} value={input}/>

      <button type="submit"> send </button>
    </form>
  </>)
}




export default Chat;