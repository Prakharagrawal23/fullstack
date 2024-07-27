#   to create the file -> 
    New-Item -Path . -Name "server.js" -ItemType "File"
    e.g. index.js
## 1. we write the start script in package.json file to start the script. 

## 2. there are two ways to import the file
    1. common js
        --const express = require('express');

    2. modules js
        --import express from 'express';

    to solve the issue write the command in package.json file that the file
    we have to use as module or common
            ---"type": "module",
## 3. json formatter to read the api's

## 4. toolchain/bundlers - 
    the work of the toolchain is to take all the file of the javascript and make the bundal of those file and make those file which is understand by the browser because at the end of the day our browser only understand the html, css, js.

## 5. here we are using the bundlers which is vite

## 6. now making the application using veet in frontend

# front end 
## 1. create the react application in the frontend  
    npm create vite@latest . (dot means that create the file in the same folder)
## 2. install the npm
    npm i
## 3. start the npm file 
    npm run dev
    here now we get the local host
## 4. now install the 
    npm i axios 
    to handle the incomming data in web pages we acan also use the fetch 
    but the axios give us some additional funtionality and features 
## 5. the data which come from the responce we don't have to convert that data in the json fromat the axios can handle that things

## 6. ERROR- localhost/:1 Access to XMLHttpRequest at 'http://localhost:3000/jokes' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

## 7. CORS - 
    1. the cors(cross origin resourse sharing) provide the safty to own application 
    e.g. owr server is running in some other domain but the application is running in some other so this is not possible that any application comes and take the data from ours so it may increase the no. of request which increase the bill 
    2. so to solve this problem we use the cors
    3. the cors is the middleware which is used to handle the request and response
    4. if our url/port_number is diffrent that it call the cross origin
## 8. solution.1-
    1. go to the backend and import the cors in backend
        problem---- 
        more variables are avilable like coreOption ,whitelist but if we write this is the production then it goes the problem because here we are doing in the localhost then we know the port number but in the production we don't have the port number  
## 9. handle these problem- 
    1. do use the proxy 
    2. or go to the server and whitelisting the url's

## 10. build (bad programmming)
1. the build is the process of making the application in the production
2. make the dist folder which contain the all our code in the shrinked form this dist folder contains the static file 
3. move the dist folder to the backend 
4. using middleware serve the static file which locate in dist folder 
5. all thing is okay but if we update in frontend then it can not be push in the backend
6. i have again build then remove the old dist folder from backend and add the ne dist folder which is created after the updation 