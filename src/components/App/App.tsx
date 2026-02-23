// ==========================================================================================
// Компонент App є контейнером для решти компонентів
// ==========================================================================================

// Імпорт модуля useState - для роботи зі станом з REACT
import { useState } from "react";

// Імпорт модуля зі стилями компонента
import css from "./App.module.css";

// Імпорт інтерфейса стану
// ----------------------------------------------------------------------------
// import { type Votes } from "../../types/votes";

// Імпорт компонента SearchBar
import SearchBar from "../SearchBar/SearchBar";

// Імпорт бібліотеки react-hot-toast (Додатково - npm install react-hot-toast)
// toast - функция вызова уведомления
// Toaster - компонент библиотеки
import toast, { Toaster } from "react-hot-toast";

function App() {
  // Встановлюємо стан - рядок з пошуком
  const [query, setQuery] = useState("");

  // Функція пошуку відео за запитом
  const findMovies = (nameQuery: string) => {
    // Змінюємо стан - на значення строки запиту
    setQuery(nameQuery);
    // Викликаємо функцію пошуку фільмів
    // Якщо в результаті запиту масив фільмів порожній, виводимо повідомлення:
    toast.error("No movies found for your request");
  };

  return (
    <div className={css.app}>
      <Toaster />
      <SearchBar onSubmit={findMovies} />
      <p>{query}</p>
    </div>
  );
}

export default App;
