import React, { useEffect, useState } from 'react'


const ApiExample = () => {
  
  var [message,setMessage] = useState({ });
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke',  {
      
    })
      .then((res) => res.json())
      .then((msg) =>
       {
        setMessage(msg)
         console.log(msg)
      })
      .catch((err) => console.log(err + ' Error'));
  }, []);
  
  return (
    <div>
      {/* <button onClick={()=> setMessage()}>Change</button> */}
      {message ? (
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{backgroundColor:'#fff', width:'500px', borderRadius:'10px',padding:'20px',}} >
            <h3  className='text-center' style={{color:'#000'}}>Jokes</h3>
            <br/>
              <p className='text-center' style={{color:'#000'}}>{JSON.stringify(message.setup)}</p>
              <p className='text-center' style={{color:'#000'}}>{JSON.stringify(message.punchline)}</p>
          </div>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiExample
