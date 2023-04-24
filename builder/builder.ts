class PersonTS {
  private name: string;
  private lastName: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return this.name + ' ' + this.lastName;
  }
}

interface PersonBuilderTS {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  setName(name: string): PersonBuilderTS;
  setLastName(lastName: string): PersonBuilderTS;
  setAge(age: number): PersonBuilderTS;
  setCountry(country: string): PersonBuilderTS;
  setCity(city: string): PersonBuilderTS;
  addHobby(hobby: string): PersonBuilderTS;
  build(): PersonTS;
}

class NormalPersonBuilder implements PersonBuilderTS {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  reset() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setLastName(lastName: string): PersonBuilderTS {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  setCountry(country: string) {
    this.country = country;
    return this;
  }

  setCity(city: string) {
    this.city = city;
    return this;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    return this;
  }

  build() {
    const person = new PersonTS(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );

    this.reset();

    return person;
  }
}

const normalPersonBuilder = new NormalPersonBuilder();
const personTS = normalPersonBuilder
  .setName('Juan')
  .setLastName('Osorio')
  .addHobby('Eat')
  .addHobby('Coding')
  .build();

console.log(personTS);

class PersonDirector {
  constructor(private personBuilder: PersonBuilderTS) {}

  setPersonBuilder(personBuilder: PersonBuilderTS) {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name: string, lastName: string) {
    return this.personBuilder.setName(name).setLastName(lastName);
  }
}

const director = new PersonDirector(normalPersonBuilder);
director.createSimplePerson('Juan', 'Osorio');

const newPerson = normalPersonBuilder.build();

console.log('newPerson', newPerson);
