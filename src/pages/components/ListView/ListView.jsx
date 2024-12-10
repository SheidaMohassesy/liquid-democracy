import styles from "./ListView.module.scss";

const ListView = ({ children }) => {
  return (
    <div
      className={styles.listView}
      role="region"
      aria-labelledby="listViewTitle"
    >
      {children}
    </div>
  );
};

export default ListView;
