# Modern Website Seed (MWS)

## Features
* Bower to manage web module dependencies
* Gulp as a task runner
    * minimizes HTML, CSS, JavaScript
    * compresses image assets prior to deployment
    * builds CSS from SASS/SCSS on change
    * handles properly minimizing AngularJS files using ngAnnotate
    * jshint to lint JS files
    * adds revision hash to js file names
    * builds into a dist folder for deployment
    * live reload support
* Uses AngularJS 1.2, Bootstrap 3.x 
* Karma as a test runner and Jasmine for test specs
 
## Setup

MSW requires that you have bower, gulp and karma installed:

    $ sudo npm install -g bower 
    $ sudo npm install -g gulp
    $ sudo npm install -g karma-cli
     
In the project folder we need to hydrate the project's required files.
   
    $ sudo npm install
    $ bower install

## Working on your project with live reload

    $ gulp

You should see:
    
    [14:22:11] Using gulpfile ~/gulpfile.js
    [14:22:11] Starting 'watch'...
    [14:22:11] Finished 'watch' after 12 ms
    [14:22:11] Starting 'connect'...
    [14:22:11] Server started http://localhost:8080
    [14:22:11] LiveReload started on port 35729
    [14:22:11] Finished 'connect' after 88 ms
    [14:22:11] Starting 'default'...
    [14:22:11] Finished 'default' after 11 μs

Open your web browser at http://localhost:8080 to view your application. Changes you make to your html, css, scss, javascript files should cause a browser reload 

## Running tests with Karma and Jasmine

Inside of the spec folder is a sample test file. 

Start the Karma test runner:

    $ npm test

That should launch a copy of Chrome and execute the spec test. As the specs are changed the results appear in the terminal window where Karma was started.

