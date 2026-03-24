class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstProductAddBtn = '.inventory_item button';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstProductToCart() {
    await this.page.click(this.firstProductAddBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { InventoryPage };
