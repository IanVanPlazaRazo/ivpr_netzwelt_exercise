import React, { useState, useEffect } from "react";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page reloading which loses state
    console.log(username);
    console.log(password);

    const send = { username, password }
    
    fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
         method: 'POST',
         body: JSON.stringify({
            username: username,
            password: password,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => console.log(res))
         .catch((err) => {
            console.log(err.message);
         });
   };
   /*
    fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
         mode: 'no-cors',
         method: 'POST',
         body: JSON.stringify(
            send),
         headers: {
            'Accept': 'text/plain',
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
      .then((res) => {
        console.log(res);
        //res.json();
      })
      .catch((err) => {
        console.log(err.message);
      })
  }
  */
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type = "text" placeholder="text" id="username" name="username"/>
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
      <button>Log In</button>
    </form>
  )
}