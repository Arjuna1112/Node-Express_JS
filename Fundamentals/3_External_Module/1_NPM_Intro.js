// npm - global command, comes with node
// npm - version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// 3 ways of creating - manual approach (create package.json in root), 
//npm init (step by step, press enter to skip), npm init -y (everything default) 

// Alway don't commit node modules to git hub, need to use .gitignore file add folder needs to be ignored in that   

// Under scripts we can use our own command to replace node command
// Example : instead of node app.js executing every time, add "start":"node app.js", 
// this way you can use npm start instead of node app.js
// Similar to above for few of the command we use npm run nameOfCommand, add "dev":"nodemon app.js",
// this way you can use npm run dev instead of nodemon app.js

// Package-lock.json : This is to track inter related dependencies, example for nodemon has dependecies on chokidar, debug, miniwatch
// semver etc., all these has specific version. So we commit both package.json and package-lock.json during next time import and
// execution of npm install will get you same version of file. Let's assume miniwatch version has changed under same nodemon version
// with out lock json file we would install latest one for which the code developed earlier not be compatible

// If version is 5.12.16 - 5 is major, 12 is minor, 16 is path. Mostly minor and patch are backward compatible