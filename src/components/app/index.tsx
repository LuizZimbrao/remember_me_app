import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

import Routes from '../../Routes';
import Header from '../header';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
