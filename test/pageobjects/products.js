import Page from './page'

class products extends Page {

    /**
    * define elements
    */

    get sortDropDown()  { return $("select.product_sort_container"); }
    
    get addToCartBtnLastItem()  { return $(".inventory_item:last-child .btn_primary"); }
    get lastItemName()  { return $(".inventory_item:last-child .inventory_item_name"); }
    get lastItemPrice()  { return $(".inventory_item:last-child .inventory_item_price"); }
    
    get addToCartBtnSecondLastItem()  { return $(".inventory_item:nth-last-child(2) .btn_primary"); }
    get secondlastItemName()  { return $(".inventory_item:nth-last-child(2) .inventory_item_name"); }
    get secondlastItemPrice()  { return $(".inventory_item:nth-last-child(2) .inventory_item_price"); }

    get cartIcon() { return $("path"); }
    get mainContentArea() { return $("#contents_wrapper"); }

    get inventoryItemNames() { return $$(".inventory_item_name"); }
    get inventoryItemPrices() { return $$(".inventory_item_price"); }
    

    selectSortOrder(orderCriteria)
    {
        this.sortDropDown.waitForEnabled();
        this.sortDropDown.selectByVisibleText(orderCriteria);
    }
    
    addToCartLastItem()
    {
        this.addToCartBtnLastItem.waitForEnabled();
        this.addToCartBtnLastItem.click();
    }

    addToCartSecondLastItem()
    {
        this.addToCartBtnSecondLastItem.waitForEnabled();
        this.addToCartBtnSecondLastItem.click();
    }

    navigateToCart()
    {
        this.cartIcon.waitForEnabled();
        this.cartIcon.click();
    }

    getInventoryItemNames()
    { 
        return (this.inventoryItemNames.map((inventoryItemName, index) => inventoryItemName.getText()));
    }
    
    getInventoryItemPrices()
    {
        return (this.inventoryItemPrices.map((inventoryItemPrice, index) => inventoryItemPrice.getText()));
    }

    getNamesWithPrices()
    {
        
        let nameswithPrices = [];

        this.inventoryItemNames.map((inventoryItemName, index) => {
            nameswithPrices.push(Array(inventoryItemName.getText(), this.inventoryItemPrices[index].getText().replace('$','')))
        });

        return nameswithPrices;
    }

}

export default new products()