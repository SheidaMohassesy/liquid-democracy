import Image from "next/image";
import styles from "./Header.module.scss";

const HeaderItem = ({ image, label }) => {
  return (
    <div className={styles.headerItem}>
      <Image
        src={image}
        alt="test"
        className={styles.image}
        width={32}
        height={32}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Project Overview</div>
      <div className={styles.headerMenu}>
        <HeaderItem
          label="Accessible"
          image="assets/images/img-accessibility.svg"
        />
        <HeaderItem label="Menu" image="assets/images/img-menu.svg" />
      </div>
    </div>
  );
};

export default Header;
