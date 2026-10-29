import { ServiceModel } from './models/service.model.js';

export class ServicesDao {
    async getAll() {
        return await ServiceModel.find();
    }

    async getById(id) {
        return await ServiceModel.findById(id);
    }

    async create(data) {
        return await ServiceModel.create(data);
    }

    async update(id, data) {
        return await ServiceModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await ServiceModel.findByIdAndDelete(id);
    }
}

export const servicesDao = new ServicesDao();