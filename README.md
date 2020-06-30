## WebdriverIO with Cucumber BDD
This repository is based on the following components:
WebdriverIO-v5 (Selenium - Node.js/JavaScript)
Cucumber (v 5.x)

### Installation requirements
Node v8.10 and above.
`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install from the site - https://nodejs.org/en/.
Take the LTS version based on your Operating system.
Please make sure you install NodeJS globally.
If you have nvm installed globally, then run `nvm install` to get the latest version of node specified in the`.nvmrc` file [here](/.nvmrc).  If you don't use nvm, be sure that you are using a compatible version. Further details on nvm can be found on the official [github page](https://github.com/creationix/nvm). MAC OSX users are best suited to install nvm with homebrew `brew install nvm`.

Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.

        node --version
        npm --version

Above command should print out the version that you have installed.

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.


### Run Tests
Navigate to the framework's root folder and run Run `npm run test`


## Regarding the Task
1. Basic structure is in place and can be scalled for more tests/validations.
2. The modular structure allows for reusability and easy maintainability.
3. Generic approach used for validations rather than fixed/hardcoded.
4. Following validations have been added:
  - The count displayed on the cart icon gets incremented after a product is added to the cart.
  - The count displayed on the cart icon gets decremented after a product is removed from the cart.
  - The basket should displays the correct list products after addition/removal of products.
  - The last page of the flow is correct and displays the expected elements.
5. Appropriate validations has been added, however the validation relating to sorting of products has been commented out for now as it is more complex than initially anticipated:
  - The product names and prices were captured from the products page and stored in an Array object.
  - Sorting applied based on price to created the expected sorted collection.
  - However the validation failed as there was a case wherein 2 products had the same price.
  - The application was doing a secondary sort on name and hence the expected sorted collection needs to be   manipualed further, which is a bit more effort.
  - Hence this validation has been commented for now.
6. Assumption made that - For the current scope, 1st product in the basket is the cheapest product as appropriate ordering was done in the 1st step.