interface ListImplementor {
  elements: number[];

  add(number: number): void;
  getElements(): number[];
}

class OrderedList implements ListImplementor {
  elements: number[] = [];

  public add(number: number) {
    this.elements.push(number);
    this.elements.sort();
  }

  public getElements() {
    return this.elements;
  }
}

class UniqueList implements ListImplementor {
  elements: number[] = [];

  public add(number: number) {
    if (!this.elements.includes(number)) {
      this.elements.push(number);
    }
  }

  public getElements() {
    return this.elements;
  }
}

interface DataAbstraction {
  implementor: ListImplementor;
  add(number: number): void;
  get(): number[];
  operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
  constructor(public implementor: ListImplementor) {}

  public add(number: number) {
    this.implementor.add(number);
  }

  public get() {
    return this.implementor.getElements();
  }

  operation(fn: (n: number) => number) {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderedData = new DataRefinedAbstraction(new OrderedList());

uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);
console.log(uniqueData.get());

orderedData.add(3);
orderedData.add(3);
orderedData.add(1);
orderedData.add(1);
orderedData.add(2);
console.log(orderedData.get());

const uniqueItems = uniqueData.operation((e: number) => e * 2);
const orderedItems = orderedData.operation((e: number) => e * 2);

console.log(uniqueItems);
console.log(orderedItems);
