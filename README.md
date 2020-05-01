# login-app
## Login using Facebook or Google account with Reactjs + Nodejs

## Description
The objective of this project is to show the use of some technologies together with the authentication made with google or facebook.
Other methodologies used:
Reactjs
Nodejs
Redux
MongoDb
express
dotenv
jsonwebtoken
concurrently
nodemon

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
