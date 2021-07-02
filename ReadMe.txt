Install Node 

Harshad@LAPTOP-OLKL11B1 MINGW64 /f/Programming Data/CodingData/GitCode/reactjs/sample1
$ node -v
v14.16.0

Harshad@LAPTOP-OLKL11B1 MINGW64 /f/Programming Data/CodingData/GitCode/reactjs/sample1
$ npm -v
6.14.11

npx create-react-app sample-app
cd sample-app
npm install npm@latest -g
npm start

Error If you Got
Failed to compile
./src/reportWebVitals.js
Module not found: Can't resolve 'web-vitals' in 'F:\Programming Data\CodingData\GitCode\reactjs\sample1\sample1-app\src'
npm install react
npm install react-dom
npm start


npm install bootstrap
============
npm install uuid :: to generete unique id
use of uuid : 

import { v4 as uuid_v4 } from "uuid";
 console.log(uuid_v4());
 
 
================
Routing Example: https://www.youtube.com/watch?v=eJyZ7k6lWfE 
https://github.com/toofaniCoder/React-Users
 For Routing
 npm install react-router-dom
 ================================
 For Fake Json APi 
 npm install -g json-server
 https://www.npmjs.com/package/json-server
 Fake api : https://jsonplaceholder.typicode.com/
 
 
 package.json file changes 
 "scripts": {
    "start": "react-scripts start",
    "json-server":"json-server --watch db.json --port 3001",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  
 npm run json-server
 http://localhost:3001/users
 
 npm start and npm run json-server run concurrently or in single command
 
 https://www.npmjs.com/package/concurrently
 
 package.json file changes
 "scripts": {
    "start": "react-scripts start",
    "json-server": "json-server --watch db.json --port 3001",
    "start-dev": "concurrently \"npm start\" \"npm run json-server\"",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  
  npm run start-dev
 http://localhost:3000/
 http://localhost:3001/users
 
 
 To call server apis using axios
 https://www.npmjs.com/package/axios
 npm install axios
 
 ================================