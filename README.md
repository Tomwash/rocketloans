# Rocket Loans - Contractor Loans as a Service

Partners can enable contractors to offer financing for their clients.

[Become a Rocket Loans Partner and offer financing in your product!](https://rocketloans.com/developers)

## Prerequisites

- Npm
- Node
- Angular (optional for demo)

## Getting Started

- clone this repo
- cd rocketloans
- npm install
- npm run bundle

### Angular example

- cd example/angular-demo/parent
- ng serve
- cd ../child
- ng serve --port 4201
- click on parent app's launch IFrame button
- click on any of the child's buttons to send a message that triggers the parent callbacks

### Vanilla Example

- cd example/vanilla-demo
- open index.html in your browser
  - [Mac OS](https://superuser.com/questions/350309/how-can-i-open-a-url-in-google-chrome-from-the-terminal-in-os-x)
  - [Windows](https://superuser.com/questions/246825/open-file-from-the-command-line-on-windows)
- click on parent app's 'Click Me To Show IFrame' button
- click on any of the child's buttons to send a message that triggers the parent callbacks

### Demo

Demo site will go here

## Running the tests

## Built With

* [Typescript](https://www.typescriptlang.org/) - The web framework used
* [Mocha](https://mochajs.org/) - Used for testing
* [Chai](https://www.chaijs.com/) - Used for testing
* [jsdom](https://github.com/jsdom/jsdom) - Used to test using a virtual DOM
* [Rollup](https://github.com/rollup/rollup) - Used to package the files for use in both browsers and as a npm package

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/qloan/rocketloans/tags). 

## Authors

* **Tom Wash** - *Initial scaffolding and proof of concept*

See also the list of [contributors](https://github.com/qloan/rocketloans/contributors) who participated in this project.
