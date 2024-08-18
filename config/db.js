import mongoose from 'mongoose';

// Cambia la URL de conexión según tu configuración local o en la nube
const mongoURI = 'mongodb://localhost:27017/gestor-finanzas'; // Reemplaza con tu URI

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Salir si hay un error de conexión
  }
};

export default connectDB;
