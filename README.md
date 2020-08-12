# GuideSmiths Code Challenge

This project was created for  [GuideSmiths](https://www.guidesmiths.com/) Code Challenge.

## Content

It contains a simple API and a app to show info from the API

## How to start the API

Open a terminal and run these commands: 
```
git clone git@github.com:uRuiz/GuideSmiths_Code_Challenge.git
cd GuideSmiths_Code_Challenge/api
npm install
npm start
```
The Express server starts on port `9000`

## Docker: How to build and run containers

In order to build the guidesmiths code challenge frontend container run
```
docker build -t guidesmiths-front .
docker run -i -t -p 3000:3000 guidesmiths-front
```
In order to build the guidesmiths code challenge backend container run
```
docker build -t guidesmiths-api .
docker run -p 9000:9000 guidesmiths-api
```

## How to start the app

Once you finish starting the API, run these commands from GuideSmiths_Code_Challenge/api folder:
```
cd ..
npm install
npm start
```

## Another Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
