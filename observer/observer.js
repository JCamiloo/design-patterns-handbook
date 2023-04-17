class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.refresh(data));
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const s = new Subject();
const o1 = new Observer(d => console.log('o1', d));
const o2 = new Observer(d => console.log('o2', d));

s.subscribe(o1);
s.subscribe(o2);

function change() {
  setInterval(() => {
    s.notify(Math.floor(Math.random() * 100));
  }, 2000)
}

change();