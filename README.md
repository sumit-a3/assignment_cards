# `assignment-cards` — a reponsive list of content cards

This project `assignment-cards`is an application to display a list of content-cards which are responsive.

We have used AngularJs with Bootstrap framework for the UI.


## Getting Started

To get you started you can simply clone the `assignment-cards` repository and install the dependencies:

### Prerequisites

You need git to clone the `assignment-cards` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `assignment-cards`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `assignment-cards`

Clone the `assignment-cards` repository using git:

```
git clone https://github.com/angular/assignment-cards.git
cd assignment-cards
```

If you just want to start a new project without the `assignment-cards` commit history then you can do:

```
git clone --depth=1 https://github.com/angular/assignment-cards.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`assignment-cards` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/            --> version related components
      version.js        --> version module declaration and basic "version" value service
      version_test.js   --> "version" value service tests
      card_view.js      --> the component that displays a list of content-cards
  controllers/
    fetch_cards.js      --> file that fetches cards passing data to them
  views/
    home.html           --> landing page that calls the component
    card_view.html      --> the component's view that displays a list of content-cards
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
