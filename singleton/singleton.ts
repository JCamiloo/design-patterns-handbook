class MySingleton {
  private static instance: Singleton;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}

const mySingleton = MySingleton.getInstance();
console.log(singleton.random);

const mySingleton2 = MySingleton.getInstance();
console.log(singleton2.random);
