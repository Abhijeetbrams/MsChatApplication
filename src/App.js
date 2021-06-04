import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from './Components/chatfeed.component';

const App=()=>
{
    // Here we're importing the ChatEngine as a backend sytem and 
    // we're overridding the messaging system by implementing our own Chat Feed 
    // App and rest of the value we get from signing up and creating chat 
    // room and creating an Admin User.
    return (
     <ChatEngine 
       height="100vh"
       projectID="59ea41e9-3942-41f7-a632-9da2933b4814"
       userName="Abhijeet"
       userSecret="12345"
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
       />
    );
}

export default App;