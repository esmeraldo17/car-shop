import { isValidObjectId } from 'mongoose';
import CarDomain from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  public async create(car: ICar) {
    const carModel = new CarModel();
    const cars = await carModel.create(car);
    if (cars) {
      return new CarDomain(cars);
    }

    return null;
  }

  public async findAll() {
    const carModel = new CarModel();
    const cars = await carModel.findAll();
    const allCars = cars.map((car) => {
      if (car) return new CarDomain(car);
      return null;
    });
    return allCars;
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const carModel = new CarModel();
    const car = await carModel.findById(id);
    if (car === null) return { status: 404, message: { message: 'Car not found' } };
    
    return { status: 200, message: new CarDomain(car) };
  }
}