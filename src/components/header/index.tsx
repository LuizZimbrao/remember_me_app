import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import Logout from '../../assets/icons/logout.svg';

import style from './styles.module.css';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const { authorized, handleLogout } = useAuth();
  const showHeader = ['/', '/rooms', 'links'];

  return (
    <>
      {(authorized && showHeader.includes(window.location.pathname)) && (
        <header className={style.header}>
          <img src={Logo} alt="Remember-me" />

          <ul>
            <li>
              <Link to="/">Temas</Link>
            </li>
            <li>
              <Link to="/rooms">Salas</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li onClick={handleLogout}>
              <img src={Logout} alt="Sair" />
            </li>
          </ul>
        </header>
      )}
    </>
  );
}
