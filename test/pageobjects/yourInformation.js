import Page from './page'

class yourInformation extends Page {

    /**
    * define elements
    */

    get subheader()  { return $(".subheader"); }
    get mainContentArea() { return $("#contents_wrapper"); }

    getMainSectionHeadingText()
    {
        this.subheader.waitForEnabled();
        return this.subheader.getText();
    }
    
}

export default new yourInformation()