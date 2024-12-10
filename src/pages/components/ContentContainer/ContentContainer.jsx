import { useAppContext } from "@/contexts/AppContext";
import ToggleList from "../ToggleList/ToggleList";
import styles from "./ContentContainer.module.scss";

const ContentContainer = () => {
  const { isListSelected } = useAppContext();
  return (
    <div className={styles.contentContainer}>
      <ToggleList />
      {isListSelected && <div> list view</div>}
      {!isListSelected && <div> grid view</div>}
    </div>
  );
};

export default ContentContainer;
