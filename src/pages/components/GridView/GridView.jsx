import styles from "./GridView.module.scss";

const GridView = ({ children }) => {
  return <div className={styles.gridView}>{children}</div>;
};

export default GridView;
