import React,{useState} from 'react';
import axios from 'axios';

const LoginForm=()=>{
    const[credentials,setCredentials]=useState({
        username:"",
        password:""
    });
   
    const projectID = '59ea41e9-3942-41f7-a632-9da2933b4814';
    const[error,setError]=useState("");
    const authObject = { 'Project-ID': projectID, 'User-Name': credentials.username, 
    'User-Secret': credentials.password};

    const handleSubmit=async(event)=>
    {
        event.preventDefault();
        console.log(credentials);
        try{
       const response= await axios.get('https://api.chatengine.io/users/me/', { headers: authObject });
         console.log(response);
        localStorage.setItem('username', credentials.username);
        localStorage.setItem('password', credentials.password);
        console.log(response.data);
        window.location.reload();
        setError('');
        }catch(err){
             setError("Oops Credentials are wrong!!!");
        }
    }
    const handleChange=(event)=>
    {
        //console.log(event);
        const{name,value}=event.target;
        setCredentials({...credentials,[name]:value})
    }
    return(
    <div className="wrapper">
       <div className="form">
          <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
             <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" className="input" required/>
         <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" className="input" required/>
         <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
            </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
    );
}


export default LoginForm;