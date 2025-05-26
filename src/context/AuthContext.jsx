import React, { createContext, useState, useContext, useEffect } from 'react';

// Create authentication context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if there's a logged-in user when the app loads
  useEffect(() => {
    // In a real app, this would check with the backend/Firebase/etc
    const storedUser = localStorage.getItem('smartShieldUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('smartShieldUser');
      }
    }
    setLoading(false);
  }, []);

  // Register a new user
  const register = async (name, email, password) => {
    setLoading(true);
    setError('');
    
    try {
      // In a real app, this would call an API to create a user
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration purposes only - in a real app, this would be handled by the backend
      const newUser = {
        id: Math.floor(Math.random() * 10000),
        name,
        email,
        createdAt: new Date().toISOString()
      };

      // Save user in local storage (in a real app, you'd use cookies/JWT)
      localStorage.setItem('smartShieldUser', JSON.stringify(newUser));
      
      // Set the current user
      setCurrentUser(newUser);
      return newUser;
    } catch (error) {
      setError(error.message || 'Registration failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log in an existing user
  const login = async (email, password) => {
    setLoading(true);
    setError('');
    
    try {
      // In a real app, this would validate credentials with the backend
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration purposes - in a real app, this would be verified by the server
      if (email === 'demo@smartshield.com' && password === 'password') {
        const user = {
          id: 12345,
          name: 'Demo User',
          email: 'demo@smartshield.com',
          createdAt: new Date().toISOString()
        };
        
        localStorage.setItem('smartShieldUser', JSON.stringify(user));
        setCurrentUser(user);
        return user;
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setError(error.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Log out the current user
  const logout = async () => {
    setLoading(true);
    
    try {
      // In a real app, this would call an API to invalidate the session
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Clear user from local storage
      localStorage.removeItem('smartShieldUser');
      setCurrentUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    setLoading(true);
    setError('');
    
    try {
      // In a real app, this would trigger a password reset email
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration purposes only
      return { success: true, message: 'Password reset email sent' };
    } catch (error) {
      setError(error.message || 'Password reset failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (userData) => {
    setLoading(true);
    setError('');
    
    try {
      // In a real app, this would update user data in the backend
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update the user in local storage
      const updatedUser = { ...currentUser, ...userData };
      localStorage.setItem('smartShieldUser', JSON.stringify(updatedUser));
      
      // Update current user state
      setCurrentUser(updatedUser);
      return updatedUser;
    } catch (error) {
      setError(error.message || 'Profile update failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Context value
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

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;