# Travel Adviser

This project build on react/RAPIDapi, there you will see google map, on which you can find inerest places
like hotels, restaurants, attractions. 
## Instruction to use this Application

`git clone https://github.com/Upman32/TravelAdviser.git`

`cd TravelAdviser`

`npm i `

after installation node_modules you can start project!

`npm start`

## Where you must register to use this app?

You need to register in https://rapidapi.com

And subscribe on such APIs like Travel Advisor and Open Weather Map 

Then you must use your RAPIDapi key to change in src/API/index.js 'process.env.REACT_APP_RAPIDAPI_API_KEY'to your key

You need also google map api key 

To create your api key go to https://console.cloud.google.com/

After that you use your key in src/Map/Map.jsx and change 'process.env.REACT_APP_GOOGLE_MAPS_API_KEY' to your key

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
