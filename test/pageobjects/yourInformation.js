import Page from './page'

class yourInformation extends Page {

    /**
    * define elements
    */

    get subheader()  { return $(".subheader"); }
    get firstName()  { return $("#first-name"); }
    get lastName()  { return $("#last-name"); }
    get postalCode()  { return $("#postal-code"); }
    get mainContentArea() { return $("#contents_wrapper"); }


    getMainSectionHeadingText()
    {
        this.subheader.waitForEnabled();
        return this.subheader.getText();
    }
    
}

export default new yourInformation()