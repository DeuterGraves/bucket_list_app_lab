install:
dev dependencies
webpack
nodemon

dependencies
body-parser (formats string objects to json)
express (framework)
mongodb (talks to mongodb)

scripts for package.json
"start": "node server/server.js",
"test": "echo \"Error: no test specified\" && exit 1",
"server:dev": "nodemon server/server.js",
"build": "webpack -w"
(these are also your commands.)
