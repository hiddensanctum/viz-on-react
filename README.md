#Lunch and Learn: Viz on React.js + Mocha Testing
This repo is for the hands on lunch and learn exercise to create some simple visualizations on react.js and mocha testing. All components are written in ES6 and

###Setup
```
$ npm install
```

###Run Dev Server
```
$ webpack-dev-server --progress --colors
```

###Run Mocha Tests
In order to run the mocha test, make sure you have mocha installed globally.
```
$ npm install mocha -g
$ npm test
```

The narrative-test.js uses jsdom and testdom to generate a mock browser for the actual test. Because components are written in ES6, babel is required to transpile the components for testing.
```
mocha --compilers js:babel/register
```

The reporter has been set to nyan and can be changed in the package.json
```
-R nyan
```
