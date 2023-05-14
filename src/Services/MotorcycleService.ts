import MotoDomain from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoModel from '../Models/MotorcycleODM';

export default class MotorcycleService {
  public async create(moto: IMotorcycle) {
    const motoModel = new MotoModel();
    const motos = await motoModel.create(moto);
    if (motos) {
      return new MotoDomain(motos);
    }

    return null;
  }
}