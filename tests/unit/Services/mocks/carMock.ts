import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';

export const validCarWithStatus: ICar = {
  model: 'Marea',
  year: 2001,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const newCar: ICar = {
  id: '64626e3030413213e6f4b87f',
  model: 'Marea',
  year: 2001,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carsArray: ICar[] = [
  {
    id: '64626e3030413213e6f4b87f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '78412d80feb9f483ee823ac5',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const allCars = carsArray.map((car) => new Car(
  {
    id: car.id,
    model: car.model,
    year: car.year,
    color: car.color,
    status: car.status,
    buyValue: car.buyValue,
    doorsQty: car.doorsQty,
    seatsQty: car.seatsQty,
  },
));

export const carOutput: Car = new Car(newCar);

export const updatedCar = {
  id: '64626e3030413213e6f4b87f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.000,
  doorsQty: 4,
  seatsQty: 5,
};