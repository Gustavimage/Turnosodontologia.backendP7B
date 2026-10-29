
export const envConfig = {
    port: Number(process.env.PORT) || 8080,
    appName: process.env.APP_NAME || 'Sistema Backend de Turnos y Reservas',
    appEnv: process.env.APP_ENV || 'development',
    mongoUri: process.env.MONGO_URI || ''
};