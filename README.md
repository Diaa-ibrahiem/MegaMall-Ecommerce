# MegaMall-Ecommerce
This is a online store app implemented using Angular 9.
+ All Dependencies you will need 
    + "@angular-devkit/build-angular": "~0.901.0",
    + "@angular/cli": "~9.1.0",
    + "@angular/compiler-cli": "~9.1.0",
    + "@angular/language-service": "~9.1.0",
    + "@types/node": "^12.11.1",
    + "@types/jasmine": "~3.5.0",
    + "karma": "~4.4.1",
    + "karma-jasmine": "~3.0.1",
    + "protractor": "~5.4.3",
    + "ts-node": "~8.3.0",
    + "typescript": "~3.8.3"
## Demo
[Live Demo](http://ecommerceangularapp-e5788.web.app/)

## How to start

You will need to clone the source code of MegaMall-Ecommerce GitHub repository.

git clone https://github.com/Diaa-ibrahiem/MegaMall-Ecommerce.git

After the repository is cloned, go inside of the repository directory and install dependencies:
+ npm install
+ Run ng serve for a dev server. + Navigate to http://localhost:4200/. + The app will automatically reload if you change any of the source files.

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

## Running unit tests
Run ng test to execute the unit tests via Karma.

### Units to be tested
+ Category Page
  + test shopping cart, add a duplicate item should increment the quantity for that item.
+ Product Page, test add to cart button
    + Add 1 first item.
    + When quantity is null.
    + Add duplicate item.
    + Cart Page
    + change quantity.
    + remove item.
