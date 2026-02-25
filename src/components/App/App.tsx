// ==========================================================================================
// Компонент App є контейнером для решти компонентів
// ==========================================================================================

// Імпорт модуля useState - для роботи зі станом з REACT
import { useState } from 'react';

// Імпорт бібліотеки react-hot-toast (Додатково - npm install react-hot-toast)
// toast - функция вызова уведомления
// Toaster - компонент библиотеки
import toast, { Toaster } from 'react-hot-toast';

// Імпорт модуля зі стилями компонента
import css from './App.module.css';

// Імпорт інтерфейса стану
// ----------------------------------------------------------------------------
// import { type Votes } from "../../types/votes";

// Імпорт компонента SearchBar
import SearchBar from '../SearchBar/SearchBar';

// Імпорт компонента ErrorMessage
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// Імпорт компонента Loader
import Loader from '../Loader/Loader';

// Імпорт компонента MovieGrid
import MovieGrid from '../MovieGrid/MovieGrid';

// Імпорт інтерфейса для одного фільму
import { type Movie } from '../../types/movie';

// Iмпорт функції для HTTP-запроса
import { fetchMovies } from '../../services/movieService';

export default function App() {
  // Оголошуємо і типизуємо стан - рядок з пошуком
  const [query, setQuery] = useState<string>('');
  // Оголошуємо і типизуємо стан - масив фільмів
  const [movies, setMovies] = useState<Movie[]>([]);
  // Оголошуємо і типизуємо стан - рендеринг компонента Loader
  const [loader, setLoader] = useState<boolean>(false);
  // Оголошуємо і типизуємо стан - рендеринг компонента ErrorMessage
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  // Функція пошуку відео за запитом - асинхронна функція
  const handleSearch = async (nameQuery: string) => {
    // Змінюємо стан - на значення строки запиту
    setQuery(nameQuery);
    // Очищуємо стан - масив фільмів
    setMovies([]);

    // Робимо запит та перевіряємо на помилку
    try {
      // Змінюємо стан для рендеринга компонента ErrorMessage
      setErrorMessage(false);
      // Змінюємо стан для рендеринга компонента Loader
      setLoader(true);
      // Викликаємо функцію пошуку фільмів
      await fetchMovies({ nameQuery }).then(movies => {
        // Якщо в результаті запиту масив фільмів порожній, виводимо повідомлення:
        if (movies.length === 0) {
          toast.error('No movies found for your request');
        } else {
          // Записуємо стан - масив фільмів
          setMovies(movies);
          console.log('movies', movies);
        }
      });
    } catch (error) {
      console.log('error', error);
      // Змінюємо стан для рендеринга компонента Loader
      setLoader(false);
      // Змінюємо стан для рендеринга компонента ErrorMessage
      setErrorMessage(true);
    } finally {
      // Змінюємо стан для рендеринга компонента Loader
      setLoader(false);
    }
  };

  const createModal = () => {
    console.log('Функція модального вікна');
  };

  return (
    <div className={css.app}>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      <p>Запрос - {query}</p>
      <p>Длина - {movies.length}</p>
      {/* Умовний рендеринг компонента ErrorMessage в залежності від стану */}
      {errorMessage && <ErrorMessage />}
      {/* Умовний рендеринг компонента Loader в залежності від стану */}
      {loader && <Loader />}
      {movies.length > 0 && (
        <MovieGrid onSelect={createModal} movies={movies} />
      )}
    </div>
  );
}
