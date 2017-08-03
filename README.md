## Basic javascript framework for visual regression

## Requirements

* imagemagick
* graphicsmagick
* npm


## How to use it

By default local one is launch and you can simple use `npm test`  for run all the tests or launch `npm test -- --spec test/patch_to_the_test`  for launch a single test

If you want to launch tests in cloud you have to use `npm run test:cloud` or if you want a single test `npm run test:cloud -- --spec test/patch_to_the_test`  take care because this will run the tests in cloud for all the browsers


Interesting stuff about webdriver
----------

Webdriver api - > http://webdriver.io/api.html

Webdriver Pagebject pattern → http://webdriver.io/guide/testrunner/pageobjects.html (+webdriverpageobject) 
