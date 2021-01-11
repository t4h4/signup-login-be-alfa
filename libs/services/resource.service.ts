import { Model } from 'mongoose';

export class ResourceService<T extends any, C extends any, U extends any> {

    constructor(protected readonly mongoModel: Model<T>) { }

    async create(model: C): Promise<T> {
        const createdModel = new this.mongoModel(model);
        return await createdModel.save();
    }

    async findAll(): Promise<T[]> {
        return await this.mongoModel.find();
    }

    async findOne(id: string): Promise<T> {
        return await this.mongoModel.findOne({ _id: id }).exec();
    }

    async delete(id: string): Promise<T> {
        return await this.mongoModel.findByIdAndRemove({ _id: id });
    }

    async update(id: string, dto: U): Promise<T> {
        let newModel = this.mongoModel.findOne({ _id: id }).exec();
        newModel = { ...newModel, ...(dto as object) };
        return await this.mongoModel.findByIdAndUpdate(id, newModel, { new: true }).exec();
    }

}