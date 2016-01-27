#Lunch and Learn: Viz on React.js + Mocha Testing
This repo is for the hands on lunch and learn exercise to create some simple visualizations on react.js and mocha testing. All components are written in ES6 and uses Babel to transpile. All components are written in the ES6 syntax rather than React syntax for future proofing.

This exercise walks through creating a basic React.js component, a wrapper components around Victory.js, and creating your own Echart component from scratch.

###Branches
* step-0-initial: Initial state of the React.js app with no components. You should NOT be able to run webpack-dev-server and there should NOT be a src folder.
* step-1-narrative-component: You should see a basic narrative component with no props
* step-2-victory.js: You should see a basic victory pie component
* step-3-echart.js: You should see an echart scatter plot
* mocha-testing: Adds a mocha test for the narrative component


###Setup
```
$ npm install webpack-dev-server -g
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
