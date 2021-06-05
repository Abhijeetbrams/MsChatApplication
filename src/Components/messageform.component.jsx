import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import axios from 'axios';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  //const [whosTyping,setTyping]=useState('');
  const { chatId, creds } = props;
  const username=localStorage.getItem('username');
  const password=localStorage.getItem('password');
  const projectID = '59ea41e9-3942-41f7-a632-9da2933b4814';
 // const authObject = { 'Project-ID': projectID, 'User-Name': username, 
 // 'User-Secret': password};
  //console.log(chatId);
  //console.log(username);
  //console.log(password);
  let config = {
    headers: {
        'Project-ID': projectID,
        'User-Name': username, 
       'User-Secret': password
    }
  }
  
  const handleChange = async(event) => {
  setValue(event.target.value);
     console.log(chatId);
   // isTyping(props, chatId);
   // It's a wrong way to pass headers and data in the axios call
   //const response = await axios.post(`https://api.chatengine.io/chats/${chatId}/typing/`,{headers:authObject});
   const response = await axios.post(`https://api.chatengine.io/chats/${chatId}/typing/`,null,config);
   const data=response.data;
   //setTyping(data.person);
  // console.log(whosTyping);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      //const response = await axios.
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (

    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
   
  );
};

export default MessageForm;