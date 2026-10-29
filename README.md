Backend - Gestión de Turnos Odontológicos y Servicios

API REST desarrollada en Node.js y Express para la gestión de turnos y servicios odontológicos. El proyecto se encuentra bajo un patrón de capas y utiliza MongoDB Atlas como base de datos principal a través de Mongoose.

-----------------------------------------------------------------------------------------------------
Estructura

src/
   config/
      env.config.js
      database.config.js
   controllers/
      services.controller.js
      bookings.controller.js
      views.controller.js
   public/
         css/ 
            styles.css
         js/
            socket.js
   dao/
      models/
         booking.model.js
         service.model.js
         message.model.js
      services.dao.js
      bookings.dao.js
   data/
      services.json
      bookings.json
   repositories/
      services.repository.js
      bookings.repository.js
   routes/
      services.router.js
      bookings.router.js
      views.router.js
   services/
      services.service.js
      bookings.service.js
   views/
         layaouts/
               main.handlebars
         bookings.handlebars
         services.handlebars
   app.js
   server.js
package.json           

-------------------------------------------------------------------------------------------------------
Instalacion y configuracion

copiar el repositorio e instalar dependencias
en bash npm install

configurar las variables de entorno
PORT=8080
MONGO_URI=tu_cadena_de_conexion_de_mongodb_atlas

Ejecutar servidor
npm run dev
npm start

--------------------------------------------------------------
Endpoints de la API:

Servicios (services):

GET /services: Obtenemos el listado completo de servicios odontológicos.
GET /services/:sid: Obtenemos el detalle de un servicio específico según su ID.
POST /services: Creamos un nuevo servicio de odontología.
PUT /services/:sid: Actualizamos un servicio existente.
DELETE /services/:sid: Eliminamos un servicio del listado de servicios.

Reservas (bookings):

POST /bookings: Creamos una nueva reserva de turno.
GET /bookings/:bid: Obtenemos el detalle de una reserva por su ID.
POST /bookings/:bid/services: Agregamos un servicio existente a una reserva.

