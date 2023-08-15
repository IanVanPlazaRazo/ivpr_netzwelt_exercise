import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [response, setResponse] = useState('');

  const handleButtonClick = (e) => {
    e.preventDefault();
    axios.post('post.php')
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setResponse('Error: ' + error.message);
      });
  }
  /*
  const handleButtonClick = (e) => {
    e.preventDefault();
    const http = require("https");

    const url = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';

    const options = {
        method: 'POST',
        'Accept': 'application/json"',
        'Authorization': 'Bearer {token}',
        'Content-Type': 'application/json',
    };

    const data = `{
      "username": "foo",
      "password": "bar"
    }`;

    let result = '';
    const req = http.request(url, options, (res) => {
        console.log(res.statusCode);

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            result += chunk;
        });

        res.on('end', () => {
            console.log(result);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.write(data);
    req.end();
  }
  /*
  const [responseData, setResponseData] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("I AM CLICKED");
    const apiUrl = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';
    const requestData = {
      username: 'foo',
      password: 'bar',
    };
    
    fetch(apiUrl, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(console.log(requestData))
      .then(response => console.log(response.text()))
      .then(data => {
        setResponseData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  /*
  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page reloading which loses state
    console.log(username);
    console.log(password);

    const send = { username, password }
    
    /*
    fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
         mode: 'no-cors',
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
            console.log(err.message)
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
    <form onSubmit={handleButtonClick}>
      <label htmlFor="username">Username</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type = "text" placeholder="text" id="username" name="username"/>
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
      <button>Log In</button>
      <div>{response}</div>
    </form>
  )
}