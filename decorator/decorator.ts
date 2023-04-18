interface Component {
  getDetail(): string;
}

class MyProductComponent implements Component {
  constructor(protected name: string) {}

  getDetail(): string {
    return `${this.name}`;
  }
}

abstract class MyProductDecorator implements Component {
  constructor(protected component: Component) {}

  getDetail(): string {
    return this.component.getDetail();
  }
}

class MyCommercialInfoProductDecorator extends MyProductDecorator {
  constructor(
    component: Component,
    private tradename: string,
    private brand: string
  ) {
    super(component);
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

const myProductComponent = new MyProductComponent('Beer');
console.log(myProductComponent.getDetail());

const commercialInfoProduct = new MyCommercialInfoProductDecorator(
  myProductComponent,
  'London Porter',
  "Fuller's"
);

console.log(commercialInfoProduct.getDetail());
