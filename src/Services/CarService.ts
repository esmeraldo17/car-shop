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
}