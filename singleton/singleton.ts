class MySingleton {
  private static instance: MySingleton;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new MySingleton();
    }

    return this.instance;
  }
}

const mySingleton = MySingleton.getInstance();
console.log(mySingleton.random);

const mySingleton2 = MySingleton.getInstance();
console.log(mySingleton.random);
