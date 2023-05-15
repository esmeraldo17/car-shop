import Car from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const model = 'Honda Cb 600f Hornet';

export const validCarWithStatus: IMotorcycle = {
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const newMotorCycle: IMotorcycle = {
  id: '64626e3030413213e6f4b87f',
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motoArray: IMotorcycle[] = [
  {
    id: '64626e3030413213e6f4b87f',
    model,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '78412d80feb9f483ee823ac5',
    model: 'Kewesaki',
    year: 2003,
    color: 'Red',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 800,
  },
];

export const allMotos = motoArray.map((moto) => new Car(
  {
    id: moto.id,
    model: moto.model,
    year: moto.year,
    color: moto.color,
    status: moto.status,
    buyValue: moto.buyValue,
    category: moto.category,
    engineCapacity: moto.engineCapacity,
  },
));

export const motoOutput: Car = new Car(newMotorCycle);

export const updatedMoto = {
  id: '64626e3030413213e6f4b87f',
  model,
  year: 2008,
  color: 'Yellow',
  status: true,
  buyValue: 20.000,
  category: 'Street',
  engineCapacity: 600,
};