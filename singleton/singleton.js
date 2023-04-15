class Singleton {
  constructor() {
    this.random = Math.random();

    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

const singleton = new Singleton();
console.log(singleton.random);

const singleton2 = new Singleton();
console.log(singleton2.random);


class WeekDays {
  daysES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  daysEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === 'es' ? this.daysES : this.daysEN;
  }
}


const week = new WeekDays('en');
console.log(week.getDays());


const week2 = new WeekDays('es');
console.log(week2.getDays());