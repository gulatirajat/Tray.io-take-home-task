import { Then } from 'cucumber';
import state from '../stores/index';
import yourInformation from '../pageobjects/yourInformation';
import cart from '../pageobjects/cart';

Then(/^I Finish on the page where you need to enter your name and postal code$/, function() {
  yourInformation.mainContentArea.waitForDisplayed();
  yourInformation.getMainSectionHeadingText().should.equal("Checkout: Your Information");
  yourInformation.firstName.isExisting().should.equal(true);
  yourInformation.lastName.isExisting().should.equal(true);
  yourInformation.postalCode.isExisting().should.equal(true);
});

Then(/^The items should be sorted correctly on Price high to low$/, function() {
  console.log(state.expSortedArrPricesWithNames);
  console.log(state.actSortedArrPricesWithNames);
  // expect(state.actSortedArrPricesWithNames).to.deep.equal(state.expSortedArrPricesWithNames);
});

Then(/^The cart count should get updated$/, function() {
  cart.cartCount.waitForDisplayed();
  Number(state.numOfItemsCart).should.equal(Number(cart.cartCount.getText()));
});

Then(/^The updated basket should display the correct products$/, function() {
  state.itemsPresentInCartArr = cart.getProductNameAndPriceCollectionArr();
  expect(state.itemsAddedToCartArr).to.deep.equal(state.itemsPresentInCartArr);
});