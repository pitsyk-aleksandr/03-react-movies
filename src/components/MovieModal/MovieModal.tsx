// ==========================================================================================
// Компонент MovieModal – це модальне вікно.
// ==========================================================================================
// Під час натискання на зображення галереї повинно відкриватися модальне вікно,
// яке відображатиме додаткову інформацію про фільм у великому форматі.
// ------------------------------------------------------------------------------------------
// Компонент MovieModal використовується в компоненті App
// MovieModal отримує два пропси:
//      - movie - посилання на об’єкт обраного фільма;
//      - onClose - функцію закриття модального вікна.
// ------------------------------------------------------------------------------------------

// Імпорт модуля зі стилями компонента
import css from "./MovieModal.module.css";

// Оголошення інтерфейса MovieModalProps, який описує типи для пропсів компонента.
interface MovieModalProps {
  // movie - посилання на об’єкт обраного фільма
  movie;
  // onClose - функція закриття модального вікна
  // Типізація функцій - стандартна (через стрілочну функцію)
  onClose: () => void;
}

// Компонент MovieModal
export default function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button className={css.closeButton} aria-label="Close modal">
          &times;
        </button>
        <img
          src="https://image.tmdb.org/t/p/original/backdrop_path"
          alt="movie_title"
          className={css.image}
        />
        <div className={css.content}>
          <h2>movie_title</h2>
          <p>movie_overview</p>
          <p>
            <strong>Release Date:</strong> movie_release_date
          </p>
          <p>
            <strong>Rating:</strong> movie_vote_average/10
          </p>
        </div>
      </div>
    </div>
  );
}
