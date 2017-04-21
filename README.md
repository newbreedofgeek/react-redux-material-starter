# react redux material starter

![react-redux-material-starter](https://raw.githubusercontent.com/newbreedofgeek/react-redux-material-starter/master/logo.png)

A React, Redux and Material-UI based universal starter kit for web development. Server rendering with react and express. Bundled with Webpack, with HMR transforms and support for `css-modules`. Supports UI Auth on react-router route level.

## Get started

Install [yarn](https://github.com/yarnpkg/yarn) if you don't have it already:
```
npm install -g yarn
```

Then:
```
yarn
yarn start
```

Direct your browser to `http://localhost:4000`.

## Directory Structure
```
├── client
│   └── index.js
├── common
│   ├── css
│   ├── fonts
│   ├── images
│   ├── js
│   │   ├── actions
│   │   ├── components            # "Dumb" components
│   │   ├── containers            # Smart containers
│   │   ├── lib                   # Misc. libraries like helpers, etc.
│   │   ├── middleware            # Middleware for redux
│   │   ├── reducers              # Redux reducers
│   │   ├── routes                # Routes each have an index.js which exports a react-router Route.
│   │   ├── selectors             # Selectors for getting state data
│   │   └── store                 # Store configuration for production and dev.
│   └── layouts                   # Layout files to be rendered by the server.
├── nodemon.json
├── package.json
├── server
│   ├── config.js
│   ├── index.js
│   └── server.js
├── webpack
│   ├── base.js
│   ├── config.js
│   ├── development.hot.js
│   ├── development.js
│   ├── isomorphic.js
│   └── production.js
```

## CSS Modules
This project uses [CSS Modules](https://github.com/css-modules/css-modules).
Class names should be in `camelCase`. Place the css file as a sibling to the
component with the same name, for example:
```
├── components
│   ├── Header.js
│   ├── Header.scss
```

## Writing Tests
The default testing framework is Mocha and Chai, though you can use whatever you want.

Tests should reside alongside the `component/module/selector/etc` and `actions/reducers/etc` that it is
testing. For example:

```
├── reducers
│   ├── todos.js
│   ├── todos.test.js
```

Tests can be written with ES2015, since it passes through `babel-register`.

## Running Tests
To run a single test:
```
yarn test /path/to/single.test.js
```

To run a directory of tests:

```
yarn test /path/to/test/directory
```

To run all tests:

```
yarn test:all
```

This will run all files that are suffixed with a `.test.js`.

To run all tests in `watch` mode:

```
yarn test:all:watch
```

## Code Test Coverage
Code test coverage is done via istanbul via nyc:

```
yarn test:coverage
```

Full coverage report is given (shown in terminal and as lcov report in coverage directory)

All code is run against coverage, not just the unit tested modules

## Running ESLint

```
yarn lint
```

Check the `.eslintignore` file for directories excluded from linting.

## Build for Production and Run it using Express
You can build and serve this as a universal react app via the built in express server. To do that do the following.

```
// to build with production setting (make sure you export correct production ENV vars)
yarn prod:build

// you need pm2 installed. This will serve your dist build
yarn prod:start

// to stop the pm2 served app
pm2 stop callai
```

There are some shell scripts in `bin` that can be used to test your environment builds using custom settings. For e.g. to export custom env vars do this `. bin/production.sh` before building and starting. If you want to update env vars after it has been started, you can pm2 restart like so `pm2 restart callai --update-env` for those changes to take effect.

After testing your production build, make sure you run `. bin/development.sh` if you want to go back to development mode.

## Dev Tips
- debugger is turned off by default, use `debugger;  // eslint-disable-line` to force debugging although this is not recommended, find a better way to do this.
