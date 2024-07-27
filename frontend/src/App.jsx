import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  // data come from backend 
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    // we do the get get from axios from the give url
    // cut this http://localhost:3000 - now we are server in the localhost 
    // but in future we server in the server like prakhar.com so use this 
    // type this is called the standardization
    // ---but now the url http://localhost:3000 is not exist then there  
    // come the error (url not found) so we use the proxy 

    // the proxy is the common process the standardization is already done

    // add the proxy like this ("proxy": "http://localhost:4000",) in 
    // package.json file when we create the crsa app using react app 

    // but how we do in vite --- we do in the vite.config.js file
    // add the proxy like this (server: { proxy: { '/api':'http://..'}

    // now it append the proxy and also the server think that the resquest 
    // is comming from the give url(http://localhost:3000) which he thought 
    // the origin 

    
    axios.get('/api/jokes')
    .then((response)=>{
      //if successful then 
      // the data which come from the responce we don't have to convert that
      // data in the json fromat the axios can handle that things
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
      <h1>hello bro</h1>
      <p>JOKES:{jokes.length}</p>
      
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.content}</p>
          </div>
        ))
        // when we use the curly bracket then we have to return the values
      }
    </>

  )
}

export default App
