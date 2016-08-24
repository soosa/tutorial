# tutorial
This is a project to keep track of learning steps in the world of coding

1. Started with ES6 tutorial on https://egghead.io
2. Installed node.js 
$ npm init

3. Installed Webpack and Babel
$ npm install --save-dev babel-core babel-preset-es2015
$ npm install --save-dev babel-loader
$ npm install --save jquery babel-polyfill
$ npm install --save-dev webpack

Webpack did not compile without indtalling it -g
$ sudo npm install webpack -g

Intstallation faild so I had to delete node-modules folder and reinstall
$ rm -rf node_modules
$ npm install

4. Introduced gitignore
First had to un-track folders
$ git rm . -r --cached
$ git add .
$ git commit -m "fixed untracked files"
save .gitignore

5. $ webpack --watch

6. adding Reactive-Extensions / rx-node 
$ npm install rx-node--save

7. React 
$ npm install react react-dom --save
$ npm install babel-preset-react --save
$ npm install babel webpack-dev-server -g