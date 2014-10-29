wilson-demo-app
======

#Summary
This is a simple application to demostrate the how to setup and run a Wilson app.

#Install dependencies
```
npm install; bower install
```

#Run the app
```
node app/server/app.js
```

#Understanding
The server code is located in `app/server/app.js`

The client side angular app is located in `app/client/app.js`

App specific Wilson configuration is located in `app/server/config/wilson-config.json`

App routing is located in `app/client/routing.json`

App specific tag middleware is located in `app/server/tag-middleware`