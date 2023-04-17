interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];
  subscribe(observer: IObserver<T>): void;
  unsuscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class MySubject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsuscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

class MyObserver<T> implements IObserver<T> {
  constructor(private fn: (value: T) => void) {}

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new MySubject<number>();
const obs1 = new MyObserver<number>((n) => console.log('obs1', n));
const obs2 = new MyObserver<number>((n) => console.log('obs2', n));

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.notify(10);
subject.notify(50);
