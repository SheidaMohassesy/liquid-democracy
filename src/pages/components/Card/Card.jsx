import { useAppContext } from "@/contexts/AppContext";
import styles from "./Card.module.scss";

const Tag = ({ label }) => {
  return <div className={styles.tag}>{label}</div>;
};

const Card = ({ title, description, location, copyright, image }) => {
  const { isListSelected } = useAppContext();
  return (
    <div className={styles.card}>
      <div className={isListSelected ? styles.listView : styles.gridView}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} />
          <span className={styles.copyright}>{copyright}</span>
        </div>
        <div
          className={`${styles.contentWrapper} ${
            isListSelected ? styles.leftGapWrapper : styles.topGapWrapper
          }`}
        >
          <div className={styles.location}>{location}</div>
          <div className={styles.tags}>
            <Tag label="Urban development" />
            <Tag label="Sustainability" />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
