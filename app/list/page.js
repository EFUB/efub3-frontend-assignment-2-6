import styles from "./page.module.css";
import { MovieData } from "../components/MovieData";
import MovieItem from "../components/MovieItem";

export default function List() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Movies</div>
      <div className={styles.list}>
        {MovieData.map((movie) => {
          return <MovieItem movie={movie} />;
        })}
      </div>
    </div>
  );
}
