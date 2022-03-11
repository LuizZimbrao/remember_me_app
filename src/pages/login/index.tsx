/* eslint-disable no-sequences */
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './styles.module.css';

import LogoBlue from '../../assets/logoblue.svg';
import LogoWhite from '../../assets/logowhite.svg';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const loginEmailInput = useRef(null);
  const loginPasswordInput = useRef(null);
  const { handleLogin } = useAuth();

  async function login(event) {
    event.preventDefault();

    const email = loginEmailInput.current.value;
    const password = loginPasswordInput.current.value;

    await handleLogin(email, password);
  }

  function createAccount(event) {
    event.preventDefault();
  }

  return (
    <div className={style.container}>
      <div className={style.login}>
        <img src={LogoWhite} alt="Remember-me" />

        <p>Bem vindo(a) de volta!</p>

        <form onSubmit={login} className={style.loginForm}>
          <input ref={loginEmailInput} type="email" placeholder="E-mail*" />
          <input ref={loginPasswordInput} type="password" placeholder="Senha*" />
          <button type="submit">ENTRAR</button>
        </form>
      </div>

      <div className={style.create}>
        <img src={LogoBlue} alt="Remember-me" />

        <p>Olá, seja bem vindo(a)!</p>

        <form onSubmit={createAccount} className={style.createForm}>
          <div>
            <input type="text" placeholder="Nome*" />
            <input type="email" placeholder="E-mail*" />
          </div>

          <div>
            <input type="password" placeholder="Senha*" />
            <input type="password" placeholder="Confirmar Senha*" />
          </div>

          <button type="submit">CRIAR</button>
        </form>
      </div>
    </div>
  );
}
