export class DashBoard{
    constructor(page){
        this.page = page;
        this.products=page.locator('.card-body');
        this.clickCart=page.locator('[routerlink*="/cart"]');

    }
    async addProductToCart(productName){
        await this.products.filter({ hasText: productName }).getByText('Add To Cart').click();
        
    }
    async gotoCart(){
        await this.clickCart.click();
    }
}
