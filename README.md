# login-app
### Login using Facebook or Google account with Reactjs + Nodejs +  MongoDb

## Description
The objective of this project is to show the use of some technologies together with the authentication made with google or facebook.

My initial idea was to learn how to use google and facebook authentication, but the project was interesting to me, so I thought it was cool to also create access control in Nodejs, after being logged in it would be really cool to show something really important at this point, so I created the access to an API with real-time information from COVID-19, to show the data I also learned how to create a 2 card chart with real data. Hope you like it!!!

Well, in this project I was able to show very important things like mongoDb, authentication with Facebook, Google, create graphics and search data in real time from an external API.

## Used dependencies:

  ```
reactjs
nodejs
redux
mongoDb
express
dotenv
jsonwebtoken
concurrently
nodemon
react-chartjs-2
mongoose
google-auth-library
fb
moment
axios
@material-ui/core
  ```

## How to run
1. Clone or download the project
2. `npm install`
3. Create a `.env` file in the root of the project like:
  ```
  PORT=3001
  MONGODB_URI=mongodb://localhost:27017/loginapp
  JWT_PRIVATE_KEY=[jwtPrivateKey]
  GOOGLE_CLIENT_ID=[googleClientId]
  FACEBOOK_APP_ID=[fbAppId]
  FACEBOOK_APP_SECRET=[fbAppSecret]
  ```
4. Create a `.env` file inside the `client` folder like:
  ```
  REACT_APP_PERSIST_ENCRYPT_KEY=[persistEncryptKey]
  REACT_APP_GOOGLE_ID=[googleClientId]
  REACT_APP_FACEBOOK_ID=[fbAppId]
  ```
5. `npm run dev` or `npm start`

## Test at heroku
https://login-facebook-google-app.herokuapp.com/
