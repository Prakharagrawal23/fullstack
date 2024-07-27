// const express = require('express'); // old way(comman js)
import express from 'express'; // new way(moudule js)

const app = express();
// middelware - stop in middle and give some work
// app.use(express.static('dist'));
app.get('/',(req,res)=>{
    res.send('Hello World');
})
// get the list of 5 jokes
// standard approach to write the api's url(url versioning)
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            joke:'What do you call a bear with no teeth? A gummy bear',
            content:'pehla jokas'
        },
        {
            id:2,
            joke:'What do you call a bear with no teeth? A gummy bear',
            content:'doosra jokas'
        },
        {
            id:3,
            joke:'What do you call a bear with no teeth? A gummy bear',
            content:'teesra jokas'
        },
        {
            id:4,
            joke:'What do you call a bear with no teeth? A gummy bear',
            content:'chautha jokas'
        },
        {
            id:5,
            joke:'What do you call a bear with no teeth? A gummy bear',
            content:'pancham jokas'
        }
    ];
    res.send(jokes);
    })
    



const port = process.env.PORT || 3000;
// take the port from the environment variables if there is an issue 
// then we are also giving the post number

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})