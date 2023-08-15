import React, { useState } from 'react';
export const ApiRequestComponent = () => {
  const [response, setResponse] = useState('');
  
  const sendRequest = async () => {
    const url = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';
    const data = {
      username: 'foo',
      password: 'bar'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponse(JSON.stringify(responseData));
      } else {
        setResponse('Request failed with status: ' + response.status);
      }
    } catch (error) {
      setResponse('An error occurred: ' + error.message);
    }
  };
  
  return (
    <div>
      <button onClick={sendRequest}>Send Request</button>
      <div>{response}</div>
    </div>
  );
}
