console.clear();

/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;

  this.toString = () => `${this.brand} ${this.model} ${this.year}`;

  this.valueOf = () => this.mileage;
}

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;

  this.toString = () => `${brand} ${model} ${year} - ${fuelType}`;

  this.accelerate = (speed) => {
    console.log(speed);
    this.speed += speed;
    console.log(
      `Автомобіль ${this.make} ${this.model} прискорився до швидкості ${this.speed} км/год`
    );
  };

  this.brake = (speed) => {
    this.speed -= speed;
    console.log(
      `Автомобіль ${this.make} ${this.model} зменшив до швидкості ${this.speed} км/год`
    );
  };
}
// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

const car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

console.log(car.toString());
console.log(car.valueOf());

car.accelerate(50);
car.brake(20);

// Використовуємо методи для прискорення та передаємо 50

// Використовуємо методи для гальмування та передаємо 20

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weigh = weight;

  this.specific = (value) => {
    value > towingCapacity
      ? console.log("Навантаження занадто важке для буксирування")
      : console.log("Тягнення навантаження...");
  };
}

// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

const myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

myTruck.specific(1000);
myTruck.specific(100000);

Car.prototype.drive = function (kilometers, m) {
  if (!this.kilometers) this.kilometers = 0;
  this.kilometers += kilometers;
  console.log(
    `Подорожуємо ${this.kilometers} кілометрів у ${this.brand} ${this.model}.`
  );
};

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.

car.drive.bind(car);

const drive = car.drive.bind(car);

drive(10);

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  this.batteryCapacity = batteryCapacity;
  if (!new.target) console.error("Конструктор має бути викликаний з 'new'");
  else {
    Car.call(this, brand, model, year, mileage);
  }
  this.toString = () =>
    `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
}

const electricCar = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);

console.log(electricCar.toString());
