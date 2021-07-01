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