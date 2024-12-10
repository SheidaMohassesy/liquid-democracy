import styles from "./ListView.module.scss";

const ListView = ({ children }) => {
  return <div className={styles.listView}>{children}</div>;
};

export default ListView;
