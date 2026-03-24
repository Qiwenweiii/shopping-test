// pages/CheckoutPage.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
  }

  async fillInfo() {
    await this.page.fill(this.firstName, 'Test');
    await this.page.fill(this.lastName, 'User');
    await this.page.fill(this.postalCode, '123456');
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
  }
}

module.exports = { CheckoutPage };
