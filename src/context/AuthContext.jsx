import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear contexto de autenticación
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

// Comprueba si hay un usuario conectado cuando se carga la aplicación
  useEffect(() => {
// Esto se comprobaría con el backend/Firebase/etc.
    const storedUser = localStorage.getItem('smartShieldUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error al analizar el usuario almacenado:', error);
        localStorage.removeItem('smartShieldUser');
      }
    }
    setLoading(false);
  }, []);

// Registrar un nuevo usuario
  const register = async (name, email, password) => {
    setLoading(true);
    setError('');
    
    try {
      // Esto llamaría a una API para crear un usuario
      // Simulación de una llamada API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Esto lo manejaría el backend.
      const newUser = {
        id: Math.floor(Math.random() * 10000),
        name,
        email,
        createdAt: new Date().toISOString()
      };

      // Guardar al usuario en el almacenamiento local (en una aplicación real, se usaría cookies/JWT)
      localStorage.setItem('smartShieldUser', JSON.stringify(newUser));
      
      // Establecer el usuario actual
      setCurrentUser(newUser);
      return newUser;
    } catch (error) {
      setError(error.message || 'Registro fallido');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Iniciar sesión como usuario existente
  const login = async (email, password) => {
    setLoading(true);
    setError('');
    
    try {
      // esto validaría las credenciales con el backend.
      // Simulación de una llamada API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // esto sería verificado por el servidor.
      if (email === 'felixarueda1993@gmail.com' && password === 'contraseña') {
        const user = {
          id: 12345,
          name: 'felix',
          email: 'felixarueda1993@gmail.com',
          createdAt: new Date().toISOString()
        };
        
        localStorage.setItem('smartShieldUser', JSON.stringify(user));
        setCurrentUser(user);
        return user;
      } else {
        throw new Error('Correo electrónico o contraseña no válidos');
      }
    } catch (error) {
      setError(error.message || 'Error de inicio de sesion');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log out the current user
  const logout = async () => {
    setLoading(true);
    
    try {
      // esto llamaría a una API para invalidar la sesión.
      // Simulación de una llamada API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Borrar usuario del almacenamiento local
      localStorage.removeItem('smartShieldUser');
      setCurrentUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      setLoading(false);
    }
  };

  // Restablecer contraseña
  const resetPassword = async (email) => {
    setLoading(true);
    setError('');
    
    try {
      // Esto activaría un correo electrónico de restablecimiento de contraseña.
      // Simulación de una llamada API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sólo con fines de demostración
      return { success: true, message: 'Correo electrónico de restablecimiento de contraseña enviado' };
    } catch (error) {
      setError(error.message || 'Error al restablecer la contraseña');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar perfil de usuario
  const updateProfile = async (userData) => {
    setLoading(true);
    setError('');
    
    try {
      // esto actualizaría los datos del usuario en el backend.
      // Simulación de una llamada API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Actualizar el usuario en el almacenamiento local
      const updatedUser = { ...currentUser, ...userData };
      localStorage.setItem('smartShieldUser', JSON.stringify(updatedUser));
      
      // Actualizar el estado actual del usuario
      setCurrentUser(updatedUser);
      return updatedUser;
    } catch (error) {
      setError(error.message || 'Error al actualizar el perfil');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Valor de contexto
  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout,
    resetPassword,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Gancho personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};

export default AuthContext;