# wizegolangCourse
REST API Technicall Challenge
## Requirements/Dependencies
- NodeJS version: 14.15.4
- NPM: 6.14.10
- Express: 4.17.3
- 

## Install process
1. Download this code to your local machine (git clone or download the zip)
2. Make sure you have installed the correct version for NodeJS and NPM
3. Run the package library install comand 
   ```
   npm install
   ```
4. After you install all the packages (step 3) you should have a node_modules folder; make sure you also have the env file ".env"

## Execute application
1. run the following command in the root directory
   ```
    node .\app.js
   ```
2. You should see a prompt indicating "App running on port 3000"
3. Now you can make requests to 
   1. localhost:3000
   2. localhost:3000/weather/<locale>
      1. (Can substitute locale with any city/state/country in the world and the APi will return the weather for the next day)
      2. Example to get the weather for Monterrey, Nuevo Leon, Mexico:
         1. localhost:3000/weather/monterrey

## Running tests
1. Need to have installed all the dependencies
2. Run the following command in the root directory
   ```
   npm test
   ```