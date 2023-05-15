import { isValidObjectId } from 'mongoose';
import MotoDomain from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoModel from '../Models/MotorcycleODM';

export default class MotorcycleService {
  public async create(moto: IMotorcycle) {
    const motoModel = new MotoModel();
    const motos = await motoModel.create(moto);
    return new MotoDomain(motos);

    // return null;
  }

  public async findAll() {
    const motoModel = new MotoModel();
    const motos = await motoModel.findAll();
    const allMotos = motos.map((moto) => new MotoDomain(moto));
    
    return allMotos;
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const motoModel = new MotoModel();
    const moto = await motoModel.findById(id);
    if (moto === null) return { status: 404, message: { message: 'Motorcycle not found' } };
    
    return { status: 200, message: new MotoDomain(moto) };
  }

  public async update(id: string, moto: IMotorcycle) {
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const motoModel = new MotoModel();
    const updatedMoto = await motoModel.update(id, moto);
    if (updatedMoto === null) return { status: 404, message: { message: 'Motorcycle not found' } };
    
    return { status: 200, message: new MotoDomain(moto) };
  }
}