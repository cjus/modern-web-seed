# Modern Website Seed (MWS)

A reference project which demonstrates a development workflow for building web applications using AngularJS, Bootstrap3, Gulp, Jasmine, JSHint, Karma, SASS.

## Yet another seed app?

A few years ago I started using [Yeoman](http://yeoman.io/) and the [angular-generator](generator-angular) to create starting points for my web projects. It seems that each time I prepare a new project I'd encounter issues during the seed app creation. One feature or another would be out of date or no longer working.  To be fair, all of the underlying tools and technologies are undergoing very active development. So at any given point grabbing the latest release can be risky.

Still, I figured it was time to learn how the individual tools work, and how to properly configure and then integrate those tools into an efficient workflow. This project is the result of that effort. At the very least it can also serve as another implementation for those who may venture down this path.

## Features

Any modern web development process should include:  

* Bower to manage web module dependencies
* Gulp as a task runner to automate repetitive task
    * minimizes HTML, CSS, JavaScript
    * compresses image assets prior to deployment
    * builds CSS from SASS/SCSS on change
    * handles properly minimizing AngularJS files using ngAnnotate
    * jshint to lint JS files
    * jscs to check JS files against Google JavaScript Style Guide
    * adds revision hash to js file names
    * builds into a dist folder for deployment
    * live reload support
* Uses AngularJS 1.2, Bootstrap 3.x 
* Karma as a test runner and Jasmine for test specs
 
## Setup

First I assume you've installed Git and NodeJS

* Download and install [git](http://git-scm.com/downloads)
* Download and install [nodeJS](http://nodejs.org/download/)

Check the version of NPM you have installed:

    $ npm --version

If the version is less than 2.0.0, upgrade using:

    $ npm install -g npm

MSW requires that you have [bower](http://bower.io/), [gulp](http://gulpjs.com) and [karma](http://karma-runner.github.io) installed:

```shell
$ sudo npm install -g bower 
$ sudo npm install -g gulp
$ sudo npm install -g karma-cli
```
     
In the project folder we need to hydrate the project's required files.

```shell
$ sudo npm install
$ bower install
```

Note: this install can take a several minutes to complete.

## You're now ready to customize the seed app

Read the [extended docs](extended-docs.md) to learn more about working with MWS.
