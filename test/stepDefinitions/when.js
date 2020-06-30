import { When } from 'cucumber';
import state from '../stores/index';
import loginpage from '../pageobjects/login.page';
import products from '../pageobjects/products';
import cart from '../pageobjects/cart';
import yourInformation from '../pageobjects/yourInformation';


When(/^I login to the sauce demo site$/, function () {
    loginpage.login('standard_user','secret_sauce');
    products.mainContentArea.waitForDisplayed();
    state.numOfItemsCart = 0;
    state.itemsAddedToCart = '';
    state.itemsPresentInCart = '';
    state.itemsAddedToCartArr = [];
    state.itemsPresentInCartArr = [];
});

When(/^Sort the products by (.*)$/, function (orderCriteria) {
    
    state.expSortedArrPricesWithNames = products.getNamesWithPrices().sort(function(a,b) {
        return b[1]-a[1];
    });
    
    products.selectSortOrder(orderCriteria);
    products.mainContentArea.waitForDisplayed();

    state.actSortedArrPricesWithNames = products.getNamesWithPrices();
    
});


When(/^Add the cheapest product to your basket$/, function () {
    
    products.addToCartLastItem();
    products.mainContentArea.waitForDisplayed();

    state.itemsAddedToCartArr.push(Array(products.lastItemName.getText(),products.lastItemPrice.getText()));
    state.numOfItemsCart = Number(state.numOfItemsCart) + 1;
});

When(/^Add the 2nd cheapest product to your basket$/, function () {
    products.addToCartSecondLastItem();
    products.mainContentArea.waitForDisplayed();

    state.itemsAddedToCartArr.push(Array(products.secondlastItemName.getText(),products.secondlastItemPrice.getText()));
    state.numOfItemsCart = Number(state.numOfItemsCart) + 1;
});

When(/^Add the two cheapest products to your basket$/, function () {
    products.addToCartLastItem();
    products.addToCartSecondLastItem();
    state.numOfItemsCart = Number(state.numOfItemsCart) + 2;
});

When(/^Open the basket$/, function () {
    products.navigateToCart();
    cart.mainContentArea.waitForDisplayed();
});

When(/^Remove the cheapest product from your basket$/, function () {

    // ASSUMPTION - 1ST PRODUCT IS THE CHEAPEST PRODUCT IN THE BASKET DUE TO PREVIOUS STEPS
    let removedItemNameAndPrice = cart.removeFirstItemFromCart();
    cart.mainContentArea.waitForDisplayed();

    state.itemsAddedToCartArr.shift();
    state.numOfItemsCart = Number(state.numOfItemsCart) - 1;
});

When(/^Initiate checkout$/, function () {
    cart.initiateCheckout();
    yourInformation.mainContentArea.waitForDisplayed();
});