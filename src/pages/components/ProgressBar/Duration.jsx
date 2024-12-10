import styles from "./Duration.module.scss";

const Duration = ({ percentage }) => {
  return (
    <div className={styles.duration}>
      <div
        className={styles.progressBar}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress"
      >
        <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className={styles.label} aria-live="polite">
        5 days left
      </div>
    </div>
  );
};

export default Duration;
