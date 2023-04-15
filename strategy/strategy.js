class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + (amount * this.tax);
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + (amount * this.tax) - this.discount;
  }
}

const regularSaleStrategy = new RegularSaleStrategy(0.16);
const discountSaleStrategy = new DiscountSaleStrategy(0.16, 1000);

const sale = new SaleContext(regularSaleStrategy);
console.log(sale.calculate(20000));

sale.setStrategy(discountSaleStrategy);
console.log(sale.calculate(20000));
