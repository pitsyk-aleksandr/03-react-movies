// ==========================================================================================
// Компонент MovieGrid – це список карток фільмів.
// ==========================================================================================
// Він приймає два пропси:
//    - onSelect – функцію для обробки кліку на картку фільму;
//    - movies – масив фільмів.
// ------------------------------------------------------------------------------------------

// Імпорт модуля зі стилями компонента
import css from "./MovieGrid.module.css";

// Оголошення інтерфейса MovieGridProps, який описує типи для пропсів компонента.
interface MovieGridProps {
  // Типізація функцій - стандартна (через стрілочну функцію)
  onSelect: () => void;
  movies: [];
}

// Компонент MovieGrid
export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  // **************************
  movies.map((movie) => {
    console.log(movie);
  });
  onSelect();
  // ****************************
  return (
    <ul className={css.grid}>
      {/* Набір елементів списку з фільмами */}
      <li>
        <div className={css.card}>
          <img
            className={css.image}
            src="https://image.tmdb.org/t/p/w500/poster-path"
            alt="movie title"
            loading="lazy"
          />
          <h2 className={css.title}>Movie title</h2>
        </div>
      </li>
    </ul>
  );
}
