React Flypro
============

React bindings for [Flypro](https://github.com/stremann/flypro).  
Easy and flexible.

[![build status](https://travis-ci.org/stremann/react-flypro.svg?branch=master)](https://travis-ci.org/stremann/react-flypro)
[![coverage status](https://coveralls.io/repos/github/stremann/react-flypro/badge.svg?branch=master)](https://coveralls.io/github/stremann/react-flypro?branch=master)
[![npm version](https://img.shields.io/npm/v/react-flypro.svg)](https://www.npmjs.com/package/react-flypro)
[![npm downloads](https://img.shields.io/npm/dm/react-flypro.svg?style=flat-square)](https://www.npmjs.com/package/react-flypro)


### Installation

React Flypro requires **React 0.14 or later.**

```
npm install --save react-flypro
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.  
If you don't, you can [access these files on unpkg](https://unpkg.com/react-flypro/), download them, or point your package manager to them.

Most commonly people consume React Flypro as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules. These modules are what you get when you import `react-flypro` in a [Webpack](http://webpack.github.io), [Browserify](http://browserify.org/), or a Node environment.

If you don't use a module bundler, it's also fine. The `react-flypro` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/react-flypro/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/react-flypro/dist/react-flypro.js) on the page. The UMD builds make Flypro available as a `window.ReactFlypro` global variable.

The React Flypro source code is written in ES2015 but it is precompiled both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5).

### API

#### `wrap([states], [handlers])`

Wrap React component to Flypro store.  
It does not modify the component class passed to it. It *returns* a new, wrapped component class, for you to use.

##### Arguments

1.  [`states(state, [ownProps]): stateProps`]: if the function is specified, the component will subscribe to Flypro store updates. Any time it updates, `states` will be called. Its result must be a plain object, and it will be merged into the component’s props. If `ownProps` is specified as a second argument, its value will be the props passed to your component, and `states` will be additionally re-invoked whenever the component receives new props.

2.  [`handlers(send, [ownProps]): sendProps`]: if a function is passed, it will be given `send`. The default implementation injects `send` into your component’s props. If `ownProps` is specified as a second argument, its value will be the props passed to your component, and `handlers` will be re-invoked whenever the component receives new props.

##### Returns

A React component class that injects state and commands into your component according to the specified options.

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the GitHub [Releases](https://github.com/stremann/react-flypro/releases) page.

### License

MIT