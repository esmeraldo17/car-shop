import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoService from '../../../src/Services/MotorcycleService';
import { validCarWithStatus,
  motoOutput, allMotos, newMotorCycle, updatedMoto } from './mocks/motorcycleMock';

const inavlidID = 'id invalido';

describe('Testa de Motos', function () {
  it('Cadastra um moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motoOutput);
    const service = new MotoService();
    const result = await service.create(validCarWithStatus);
    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Lista todas as motos com Sucesso', async function () {
    sinon.stub(Model, 'find').resolves(allMotos);
    const service = new MotoService();
    const result = await service.findAll();
    expect(result).to.be.deep.equal(allMotos);
  });

  it('Lista uma moto específico com sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(newMotorCycle);
    const service = new MotoService();
    const result = await service.findById('64626e3030413213e6f4b87f');
    expect(result).to.be.deep.equal({ status: 200, message: newMotorCycle });
  });

  it('Se passado um ID invalido, status 422 e nao lista', async function () {
    sinon.stub(Model, 'findById').resolves();
    const service = new MotoService();
    const result = await service.findById(inavlidID);
    expect(result).to.be.deep.equal({ status: 422, message: { message: 'Invalid mongo id' } });
  });

  //   it('Se passado um ID inexistente, status 404 e nao lista', async function () {
  //     sinon.stub(Model, 'findOne').resolves();
  //     const service = new MotoService();
  //     const result = await service.findById('72232d80ae39f483ee823ac5');
  //     expect(result).to.be.deep.equal({ status: 404, message: { message: 'Motorcycle not found' } });
  //   });

  it('Atualiza uma motoo com sucesso', async function () {
    const update = sinon.stub(Model, 'findByIdAndUpdate').resolves(newMotorCycle);
    const service = new MotoService();
    await service.update('64626e3030413213e6f4b87f', updatedMoto);
    expect(update.calledOnce).to.be.deep.equal(true);
  });

  it('Se passado um ID invalido, status 422 e nao atualiza', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(newMotorCycle);
    const service = new MotoService();
    const result = await service.update(inavlidID, updatedMoto);
    expect(result).to.be.deep.equal({ status: 422, message: { message: 'Invalid mongo id' } });
  });

  afterEach(function () {
    sinon.restore();
  });
});