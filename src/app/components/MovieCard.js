import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (data) => {
  const { id, title, type, synopsis } = data.jawSummary;
//   console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={data.jawSummary.backgroundImage.url}
          alt="img"
          width={250}
          height={200}
        />
      </div>
      <div className={styles.card_data}>
        <h2>{title}</h2>
        <p>{synopsis}</p>
        <Link href={`/movie/${id}`}>
        <button>Read More..</button>

        </Link>
      </div>

    </div>
  );
};

export default MovieCard;
