import { servicesDao } from '../dao/services.dao.js';

export const getAllServicesRepo = async () => {
    return await servicesDao.getAll();
};

export const getServiceByIdRepo = async (id) => {
    return await servicesDao.getById(id);
};

export const createServiceRepo = async (data) => {
    return await servicesDao.create(data);
};

export const updateServiceRepo = async (id, data) => {
    return await servicesDao.update(id, data);
};

export const deleteServiceRepo = async (id) => {
    return await servicesDao.delete(id);
};