import {
    getAllServicesRepo,
    getServiceByIdRepo,
    createServiceRepo,
    updateServiceRepo,
    deleteServiceRepo
} from '../repositories/services.repository.js';

export const getAllServices = async () => {
    return await getAllServicesRepo();
};

export const getServices = getAllServices;

export const getServiceById = async (id) => {
    return await getServiceByIdRepo(id);
};

export const addService = async (serviceData) => {
    try {
        const newService = await createServiceRepo(serviceData);
        return {
            status: "success",
            payload: newService
        };
    } catch (error) {
        throw new Error(`Error al crear el servicio: ${error.message}`);
    }
};

export const updateService = async (id, data) => {
    try {
        const updated = await updateServiceRepo(id, data);
        return {
            status: "success",
            payload: updated
        };
    } catch (error) {
        throw new Error(`Error al actualizar el servicio: ${error.message}`);
    }
};

export const deleteService = async (id) => {
    try {
        const deleted = await deleteServiceRepo(id);
        return {
            status: "success",
            payload: deleted
        };
    } catch (error) {
        throw new Error(`Error al eliminar el servicio: ${error.message}`);
    }
};