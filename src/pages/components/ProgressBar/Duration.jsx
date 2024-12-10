import styles from "./Duration.module.scss";

const Duration = ({ percentage }) => {
  return (
    <div className={styles.duration}>
      <div className={styles.progressBar}>
        <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className={styles.label}>5 days left</div>
    </div>
  );
};

export default Duration;
