import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/gestor-finanzas';

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
