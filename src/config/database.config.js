import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns'; 
import { envConfig } from './env.config.js';

dotenv.config();

export const connectDB = async () => {
    try {
        dns.setServers(['8.8.8.8', '1.1.1.1']);

        const uri = process.env.MONGO_URI || envConfig.mongoUri;

        if (!uri) {
            throw new Error("La variable MONGO_URI no está definida en el archivo .env");
        }

        console.log("Intentando conectar a MongoDB...");
        await mongoose.connect(uri);
        
        console.log('¡Conexión a MongoDB exitosa!');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error.message);
        process.exit(1);
    }
};