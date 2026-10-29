import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import servicesRouter from './routes/services.router.js';
import bookingsRouter from './routes/bookings.router.js';
import viewsRouter from './routes/views.router.js';

const archivoActual = fileURLToPath(import.meta.url);
const carpetaActual = path.dirname(archivoActual);

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(carpetaActual, 'public')));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(carpetaActual, 'views'));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.get("/", (req, res) => {
    res.redirect('/views/services');
});
app.use("/api/services", servicesRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/", viewsRouter);