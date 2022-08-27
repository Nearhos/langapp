
import React, { useRef, useState } from 'react';
import './Chat.css';








function Chat() {



  return (
    <div>
      

    
      <ChatRoom /> 


    </div>
  );
}





function ChatRoom() {
  

 
  return (<>
    <main>

      

      <span></span>

    </main>

    <form>
  
    <button type="submit" >lang</button>
      <input placeholder="text" />

      <button type="submit" > send </button>

    </form>
  </>)
}




export default Chat;