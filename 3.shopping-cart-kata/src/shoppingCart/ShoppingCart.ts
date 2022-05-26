import { IProduct } from './interfaces/IProduct';
import ProductData from './datasets/products.json';

export class ShoppingCart {
  products: IProduct[] = ProductData;
  cart = [];

  /**
   * Add item to cart
   *
   * @param {string} name Name of item to add
   *
   * @returns {void}
   */
  addItem(name: string): void {
    // Find the product by name
    const product = this.products.find((x) => x.name === name);
    if (product) {
      // Add a copy of the object to the cart
      this.cart.push({ ...product });
      return;
    }
    // Throw an error if no product found
    throw new Error('Product does not exist!');
  }

  /**
   * Get the total of the shopping cart
   *
   * @returns number
   */
  getTotal(): number {
    let total = 0.0;
    // Loop each product in the card
    this.cart.forEach((product, productIdx) => {
      // If the product has an offer and hasn't already been discounted, then apply offer
      if (product?.offer && !product?.discounted) {
        this.applyOffer(product, productIdx);
      }
      // Add product price to total
      total += product.price;
    });
    // Round total to 2 decimal places, using integers as original price
    return Math.round((total / 100 + Number.EPSILON) * 100) / 100;
  }

  /**
   * Apply any offers on the products
   *
   * @param {IProduct} product Product to apply offer to
   * @param {number} productIdx Index of current product in cart, used to offset searches
   */
  applyOffer(product: IProduct, productIdx: number) {
    // Switch between the different availble offers
    switch (product.offer.name) {
      case 'bogof':
        this.applyBOGOF(product, productIdx);
        break;
      case 'bogohp':
        this.applyBOGOHP(product, productIdx);
        break;
      case 'bogofcf':
        this.applyBOGOFCF(product, productIdx);
        break;
    }
  }

  /**
   * Apply the buy one get one free offer
   *
   * @param {IProduct} product Product to apply offer to
   * @param {number} productIdx Index of current product in cart, used to offset searches
   */
  applyBOGOF(product: IProduct, productIdx: number) {
    const idx = this.findCartProductByName(product, productIdx);
    if (idx > -1) {
      this.cart[idx].price = 0;
      this.cart[idx].discounted = true;
    }
  }

  /**
   * Apply the buy one get one half price offer
   *
   * @param {IProduct} product Product to apply offer to
   * @param {number} productIdx Index of current product in cart, used to offset searches
   */
  applyBOGOHP(product: IProduct, productIdx: number) {
    const idx = this.findCartProductByName(product, productIdx);
    if (idx > -1) {
      this.cart[idx].price = this.cart[idx].price / 2;
      this.cart[idx].discounted = true;
    }
  }

  /**
   * Apply the buy one get cheapest one free offer
   *
   * @param {IProduct} product Product to apply offer to
   * @param {number} productIdx Index of current product in cart, used to offset searches
   */
  applyBOGOFCF(product: IProduct, productIdx: number) {
    let cheapest;
    const appliesTo = [...product.offer.appliesTo, product.name];
    let idx;
    this.cart.slice(productIdx + 1).forEach((p, pIdx) => {
      if (appliesTo.includes(p.name)) {
        if (!cheapest || p.cost < cheapest.cost) {
          cheapest = p;
          idx = pIdx;
        }
      }
    });
    idx = idx === -1 ? -1 : idx + productIdx + 1;
    if (idx > -1) {
      this.cart[idx].price = 0;
      this.cart[idx].discounted = true;
    }
  }

  /**
   * Helper function to find a product by name, off-setting the array to search by the provided index
   *
   * @param {IProduct} product Product to find
   * @param {number} startIdx Index to offset array to search
   *
   * @returns {number} Index of the found product or -1 if not found
   */
  findCartProductByName(product: IProduct, startIdx: number) {
    let idx = this.cart.slice(startIdx + 1).findIndex((p) => {
      return p.name === product.name;
    });
    return idx === -1 ? -1 : idx + startIdx + 1;
  }

  /**
   * Remove item from cart
   *
   * @param name Name of item to remove
   */
  removeItem(name: string) {
    const idx = this.cart.findIndex((product) => product.name === name);
    if (idx > -1) {
      this.cart.splice(idx, 1);
    }
  }
}
