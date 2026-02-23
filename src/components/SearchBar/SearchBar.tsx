// ==========================================================================================
// Компонент SearchBar - Хедер з формою пошуку
// ==========================================================================================
// Компонент SearchBar приймає один пропс :
// onSubmit – функцію для передачі значення інпуту під час сабміту форми.
// ------------------------------------------------------------------------------------------

// Імпорт модуля зі стилями компонента
import styles from "./SearchBar.module.css";

// Оголошення інтерфейса SearchBarProps, який описує типи для пропсів компонента.
interface SearchBarProps {
  // Типізація функцій - стандартна (через стрілочну функцію)
  onSubmit: () => void;
}

// Компонент SearchBar
export default function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
