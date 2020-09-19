# Deploy Nodejs apps using cloud database in Heroku
- git init
- git add.
- git commit -m "Initial commit"
- heroku login
- heroku create
- By default, the remote repo created is named as "heroku"
or if you have a existing heroku app(created after running "heroku create"), it can be easily added as a remote to your local repository by:
heroku git:remote -a thawing-inlet-61413
- Create a Procfile >  web: node server.js
- Listen on the correct port "process.env.PORT"
- Specify the correct version of node in package.json
    > "engines": {
        "node": "10.16.3"
    }
- Create a .gitignore file
    > /node_modules
    npm-debug.log
    .DS_Store
    /*.env
- commit all the files changed 
- git push heroku master
**Node js app is deployed**
[Navigate to the Project](https://frozen-sea-98449.herokuapp.com)
