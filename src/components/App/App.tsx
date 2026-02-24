// ==========================================================================================
// Компонент App є контейнером для решти компонентів
// ==========================================================================================

// Імпорт модуля useState - для роботи зі станом з REACT
import { useState } from "react";

// Імпорт бібліотеки react-hot-toast (Додатково - npm install react-hot-toast)
// toast - функция вызова уведомления
// Toaster - компонент библиотеки
import toast, { Toaster } from "react-hot-toast";

// Імпорт модуля зі стилями компонента
import css from "./App.module.css";

// Імпорт інтерфейса стану
// ----------------------------------------------------------------------------
// import { type Votes } from "../../types/votes";

// Імпорт компонента SearchBar
import SearchBar from "../SearchBar/SearchBar";

// Імпорт інтерфейса для одного фільму
import { type Movie } from "../../types/movie";

// Iмпорт функції для HTTP-запроса
import { fetchMovies } from "../../services/movieService";

export default function App() {
  // Встановлюємо стан - рядок з пошуком
  const [query, setQuery] = useState("");
  // Оголошуємо і типизуємо стан - масив фільмів
  const [movies, setMovies] = useState<Movie[]>([]);

  // Функція пошуку відео за запитом - асинхронна функція
  const handleSearch = async (nameQuery: string) => {
    // Змінюємо стан - на значення строки запиту
    setQuery(nameQuery);
    // Викликаємо функцію пошуку фільмів
    setMovies(await fetchMovies({ nameQuery }));
    // console.log("movies", movies);
    // Якщо в результаті запиту масив фільмів порожній, виводимо повідомлення:
    if (movies.length === 0) {
      toast.error("No movies found for your request");
    }

    // movies.map((movie) => {
    //   console.log(movie.id, movie.title, movie.vote_average);
    // });
  };

  return (
    <div className={css.app}>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />

      <p>Запрос - {query}</p>
      <p>Длина - {movies.length}</p>
    </div>
  );
}
