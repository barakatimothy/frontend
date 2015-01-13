Frontend
========

Custom JS and CSS frontend for inclusion in Canvas.

# Description
The custom JS and CSS frontend is built on top of Canvas using the mechanism in Canvas for including custom .js and .css files.

The frontend changes the Canvas graphical design and user interface by using [LESS](http://lesscss.org) and custom HTML injected using JavaScript and [Handlebars.js](http://handlebarsjs.com/) templates.

The custom JS and CSS frontend is compiled and concatenated into a single CSS and JavaScript file using Node and Grunt (JavaScript Task Runner), see Getting started
on how to build the frontend on your local machine.


# Getting started

## Install Node
To build CSS and JavaScript files you need to install [Node JS](http://nodejs.org) or update to the latest version if you are already have it installed.


## Download or clone frontend project
Clone the frontend from https://github.com/matematikk-mooc/frontend or download using your browser
```
git clone https://github.com/matematikk-mooc/frontend.git
```

## Install Grunt and build dependencies (Node packages)
Switch to the directory where the frontend is located and install the dependencies:

```
npm install
```

## Compile JS and CSS files
```
grunt
```

## Start a web server on your development machine
If you want to serve the CSS and JS files on your local machine for development, you can do this using grunt:

```
grunt serve
```

All changes in LESS (CSS) and JavaScript will automatically be compiled and are available using the following URLs:

* http://localhost:9000/mmooc-min.css
* http://localhost:9000/mmooc-min.js


## Run Jasmine JavaScript tests

```
node_modules/jasmine-node/bin/jasmine-node --verbose spec
```

# Project structure

| Directory      | Description                               |
| -------------- | ----------------------------------------- |
| spec           | Jasmine JavaScript tests                  |
| src            | Source code                               |
| src/css        | CSS(LESS)                                 |
| src/js         | JavaScript                                |
| src/templates  | Handlebars.js templates for creating HTML |
| dist/          | Build output directory                    |

# src/css

| Directory | Description                                     |
| ----------------------- | --------------------------------- |
| framework | CSS for override of global Canvas HTML elements |
| modules   | CSS for custom HTML modules added to canvas     |
| pages     | CSS overrides for specific Canvas pages         |
| setup     | Global LESS variables, mixins, custom font      |


# src/js

| File                    | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| main.js                 | Calls different JS functions to create custom HTML based on URL (routes) |
| api/api.js              | Call to Canvas REST API etc                                              |
| modules/                | Various JavaScripts called from main.js                                  |
| modules/routes.js       | Library used to call different JS functions based on URLs using RegExps  |

