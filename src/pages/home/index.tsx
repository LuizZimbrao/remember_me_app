import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ThemesService from '../../Services/ThemesService';

import style from './styles.module.css';

export default function Home() {
  const { userDetails: { name } } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [themes, setThemes] = useState([]);
  const [hasError, setHasError] = useState({ haserror: false, error: '' });

  async function loadThemes() {
    try {
      setIsLoading(true);

      const themesList = await ThemesService.listThemes();

      setThemes(themesList);
      setHasError({ haserror: false, error: '' });
    } catch (error) {
      setHasError({ haserror: true, error });
      console.log('Error', hasError);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadThemes();
  }, []);

  return (
    <div className={style.container}>
      {isLoading ? <h1>Loading...</h1> : (
        <>
          <p>{`Olá, ${name}. Seja bem vindo!`}</p>

          {themes.map((theme) => (
            <div className={style.themeContainer} key={theme.id}>
              <p>{`</> ${theme.name}`}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
