import Page from './page'

class cart extends Page {

    /**
    * define elements
    */

    get cartLastItemRemoveBtn()  { return $(".cart_item:last-child .btn_secondary"); }
    get cartLastItemName()  { return $(".cart_item:last-child .inventory_item_name"); }
    get cartLastItemPrice()  { return $(".cart_item:last-child .inventory_item_price"); }
    
    get cartFirstItemRemoveBtn()  { return $(".cart_item .btn_secondary"); }
    get cartFirstItemName()  { return $(".cart_item .inventory_item_name"); }
    get cartItemNames()  { return $$(".cart_item .inventory_item_name"); }

    get cartFirstItemPrice()  { return $(".cart_item .inventory_item_price"); }
    get cartItemPrices()  { return $$(".cart_item .inventory_item_price"); }

    get checkoutBtn()  { return $("[class='btn_action checkout_button']"); }
    get cartCount()  { return $("[class='fa-layers-counter shopping_cart_badge']"); }

    get mainContentArea() { return $("#contents_wrapper"); }

    removeFirstItemFromCart()
    {
        var removedItemNameAndPrice = ' ' + this.cartFirstItemName.getText() + ' $' + this.cartFirstItemPrice.getText();
        this.cartFirstItemRemoveBtn.waitForEnabled();
        this.cartFirstItemRemoveBtn.click();
        return removedItemNameAndPrice;
    }

    initiateCheckout()
    {
        this.checkoutBtn.waitForEnabled();
        this.checkoutBtn.click();
    }

    getProductNameAndPriceCollectionArr()
    {
        let productNameAndPriceCollectionArr = [];

        this.cartItemNames.map((cartItemName, index) => {
            productNameAndPriceCollectionArr.push(Array(cartItemName.getText(), '$' + this.cartItemPrices[index].getText()))
        });

        return productNameAndPriceCollectionArr;
    } 
        
}

export default new cart()