import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { validCarWithStatus, carOutput, allCars, newCar, updatedCar } from './mocks/carMock';

const inavlidID = 'id invalido';

describe('Testa de carros', function () {
  it('Cadastra um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const service = new CarService();
    const result = await service.create(validCarWithStatus);
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Lista todos os carros com Sucesso', async function () {
    sinon.stub(Model, 'find').resolves(allCars);
    const service = new CarService();
    const result = await service.findAll();
    expect(result).to.be.deep.equal(allCars);
  });

  it('Lista um carro específico com sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(newCar);
    const service = new CarService();
    const result = await service.findById('64626e3030413213e6f4b87f');
    expect(result).to.be.deep.equal({ status: 200, message: newCar });
  });

  it('Se passado um ID invalido, status 422 e nao lista', async function () {
    sinon.stub(Model, 'findById').resolves();
    const service = new CarService();
    const result = await service.findById(inavlidID);
    expect(result).to.be.deep.equal({ status: 422, message: { message: 'Invalid mongo id' } });
  });

  it('Se passado um ID inexistente, status 404 e nao lista', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new CarService();
    const result = await service.findById('72232d80ae39f483ee823ac5');
    expect(result).to.be.deep.equal({ status: 404, message: { message: 'Car not found' } });
  });

  it('Atualiza um carro com sucesso', async function () {
    const update = sinon.stub(Model, 'findByIdAndUpdate').resolves(newCar);
    const service = new CarService();
    await service.update('64626e3030413213e6f4b87f', updatedCar);
    expect(update.calledOnce).to.be.deep.equal(true);
  });

  it('Se passado um ID invalido, status 422 e nao atualiza', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(newCar);
    const service = new CarService();
    const result = await service.update(inavlidID, updatedCar);
    expect(result).to.be.deep.equal({ status: 422, message: { message: 'Invalid mongo id' } });
  });

  // it('Se passado um ID inexistente, status 404 e nao actualiza', async function () {
  //   sinon.stub(Model, 'findByIdAndUpdate').resolves(newCar);
  //   const service = new CarService();
  //   const result = await service.update('72232d80ae39f483ee823ac5', updatedCar);
  //   console.log(result);
  //   expect(result).to.be.deep.equal({ status: 404, message: { message: 'Car not found' } });
  // });

  afterEach(function () {
    sinon.restore();
  });
});