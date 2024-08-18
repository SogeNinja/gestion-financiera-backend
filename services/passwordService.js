import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de rondas de sal

// Hashing una contraseña
export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error al hash de la contraseña');
  }
};

// Verificar una contraseña
export const verifyPassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error('Error al verificar la contraseña');
  }
};
