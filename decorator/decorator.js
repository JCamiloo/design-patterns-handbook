class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ${super.getDetail() }`;
  }
}

const productComponent = new ProductComponent('Beer');
console.log(productComponent.getDetail());


const commercialInfoProductDecorator = new CommercialInfoProductDecorator(
  productComponent, 
  "London Porter",
  "Fuller's"
);

console.log(commercialInfoProductDecorator.getDetail());
