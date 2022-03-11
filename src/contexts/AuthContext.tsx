import {
  createContext, ReactNode, useContext, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  userDetails: {
    id?: string;
    email?: string;
    name?: string;
  };
  loading: boolean;
  authorized: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProvider) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(true);
  const [userDetails, setUserDetails] = useState({});

  async function handleLogin(email: string, password: string) {
    const response = await AuthService.authenticate(email, password);

    setUserDetails(response?.user);
    setLoading(false);
    setAuthorized(true);
    navigate('/');
  }

  async function handleLogout() {
    localStorage.removeItem('token');

    setUserDetails({});
    setLoading(false);
    setAuthorized(false);
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{
      userDetails,
      loading,
      authorized,
      handleLogin,
      handleLogout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
