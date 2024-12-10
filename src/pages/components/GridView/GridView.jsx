import styles from "./GridView.module.scss";

const GridView = ({ children }) => {
  return (
    <div
      className={styles.gridView}
      role="region"
      aria-labelledby="gridViewTitle"
    >
      {children}
    </div>
  );
};

export default GridView;
