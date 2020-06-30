import { Given } from 'cucumber';
import loginpage from '../pageobjects/login.page';

Given(/^I am on the sauce demo login page$/, function() {
  loginpage.open();     // navigating to the sauce demo login page
  browser.getTitle().should.equal('Swag Labs');
  browser.pause(2000);
});
