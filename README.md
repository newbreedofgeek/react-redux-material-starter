# react-redux-material-starter

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

Direct your browser to `http://localhost:3000`.

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
