import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import connectDB from './config/db.js'; // Ruta al archivo de configuración
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import usersRouter from './routes/user.routes.js';

const app = express();
connectDB();

// Middleware
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Rutas
app.use('/users', usersRouter);

// Manejo de errores 404
app.use((req, res, next) => {
  next(createError(404));
});

// Manejo de errores
app.use((err, req, res, next) => {
  // Configura la respuesta en JSON para errores
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(5000, () => {
  console.log('Server running on port 3001');
});

export default app;
