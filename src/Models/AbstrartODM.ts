import { Model, model, models, Schema, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }

  public async update(id: string, obj: Partial<T>):
  Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
    );
  }
}

export default AbstractODM;