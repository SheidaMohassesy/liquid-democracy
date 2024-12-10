import { useAppContext } from "@/contexts/AppContext";
import styles from "./Card.module.scss";
import Duration from "../Duration/Duration";

const Tag = ({ label }) => {
  return (
    <div className={styles.tag} role="tag" aria-label={`Tag: ${label}`}>
      {label}
    </div>
  );
};

const Card = ({ title, description, location, copyright, image, days }) => {
  const { isListSelected } = useAppContext();
  return (
    <div
      className={styles.card}
      aria-labelledby="cardTitle"
      aria-describedby="cardDescription"
    >
      <div className={isListSelected ? styles.listView : styles.gridView}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} />
          <span
            className={styles.copyright}
            aria-label={`Copyright: ${copyright}`}
          >
            {copyright}
          </span>
        </div>
        <div
          className={`${styles.contentWrapper} ${
            isListSelected
              ? `${styles.leftGapWrapper} ${styles.listContentWrapper}`
              : styles.topGapWrapper
          }`}
        >
          <div className={styles.location} aria-label={`Location: ${location}`}>
            {location}
          </div>
          <div className={styles.tags}>
            <Tag label="Urban development" />
            <Tag label="Sustainability" />
          </div>
          <div className={styles.title} role="heading" aria-level="2">
            {title}
          </div>
          <div className={styles.description}>{description}</div>
          <Duration
            days={days}
            percentage={100 - Number(days)}
            aria-live="polite"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
