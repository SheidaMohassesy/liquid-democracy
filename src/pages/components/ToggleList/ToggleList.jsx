import Image from "next/image";
import styles from "./ToggleList.module.scss";
import { Children, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";

const GridIcon = ({ classes, color }) => (
  <div className={classes}>
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8985 8.81967H17.1208V12.4262L16.0097 11.626L14.8985 12.4262V8.81967H12.1208C11.8152 8.81967 11.5652 9.09016 11.5652 9.42076V16.6339C11.5652 16.9645 11.8152 17.235 12.1208 17.235H19.8985C20.2041 17.235 20.4541 16.9645 20.4541 16.6339V9.42076C20.4541 9.09016 20.2041 8.81967 19.8985 8.81967ZM6.56521 6.4153H14.343C14.6485 6.4153 14.8985 6.14481 14.8985 5.81421V-1.39891C14.8985 -1.72951 14.6485 -2 14.343 -2H11.5652V1.60656L10.4541 0.806352L9.34299 1.60656V-2H6.56521C6.25966 -2 6.00966 -1.72951 6.00966 -1.39891V5.81421C6.00966 6.14481 6.25966 6.4153 6.56521 6.4153ZM8.78743 8.81967H6.00966V12.4262L4.89855 11.626L3.78743 12.4262V8.81967H1.00966C0.704102 8.81967 0.454102 9.09016 0.454102 9.42076V16.6339C0.454102 16.9645 0.704102 17.235 1.00966 17.235H8.78743C9.09299 17.235 9.34299 16.9645 9.34299 16.6339V9.42076C9.34299 9.09016 9.09299 8.81967 8.78743 8.81967Z"
        fill={color}
      />
    </svg>
  </div>
);

const ListIcon = ({ classes, color }) => (
  <div className={classes}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.314453 2.8158C0.314453 2.29626 0.732422 1.8783 1.25195 1.8783H3.12695C3.64648 1.8783 4.06445 2.29626 4.06445 2.8158V4.6908C4.06445 5.21033 3.64648 5.6283 3.12695 5.6283H1.25195C0.732422 5.6283 0.314453 5.21033 0.314453 4.6908V2.8158ZM5.93945 3.7533C5.93945 3.06189 6.49805 2.5033 7.18945 2.5033H18.4395C19.1309 2.5033 19.6895 3.06189 19.6895 3.7533C19.6895 4.4447 19.1309 5.0033 18.4395 5.0033H7.18945C6.49805 5.0033 5.93945 4.4447 5.93945 3.7533ZM7.18945 8.7533C6.49805 8.7533 5.93945 9.31189 5.93945 10.0033C5.93945 10.6947 6.49805 11.2533 7.18945 11.2533H18.4395C19.1309 11.2533 19.6895 10.6947 19.6895 10.0033C19.6895 9.31189 19.1309 8.7533 18.4395 8.7533H7.18945ZM5.93945 16.2533C5.93945 15.5619 6.49805 15.0033 7.18945 15.0033H18.4395C19.1309 15.0033 19.6895 15.5619 19.6895 16.2533C19.6895 16.9447 19.1309 17.5033 18.4395 17.5033H7.18945C6.49805 17.5033 5.93945 16.9447 5.93945 16.2533ZM0.314453 9.0658V10.9408C0.314453 11.4603 0.732422 11.8783 1.25195 11.8783H3.12695C3.64648 11.8783 4.06445 11.4603 4.06445 10.9408V9.0658C4.06445 8.54626 3.64648 8.1283 3.12695 8.1283H1.25195C0.732422 8.1283 0.314453 8.54626 0.314453 9.0658ZM0.314453 15.3158C0.314453 14.7963 0.732422 14.3783 1.25195 14.3783H3.12695C3.64648 14.3783 4.06445 14.7963 4.06445 15.3158V17.1908C4.06445 17.7103 3.64648 18.1283 3.12695 18.1283H1.25195C0.732422 18.1283 0.314453 17.7103 0.314453 17.1908V15.3158Z"
        fill={color}
      />
    </svg>
  </div>
);

const TabItem = ({ label, isSelected, onTabItemClickHandler, children }) => {
  let classes = styles.tab;
  if (isSelected) {
    classes += ` ${styles.tabSelected}`;
  }

  return (
    <div className={classes} onClick={onTabItemClickHandler}>
      {children}
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const ToggleList = () => {
  const { isListSelected, setIsListSelected } = useAppContext();

  return (
    <div className={styles.toggleList}>
      <div className={styles.result}>300 result</div>
      <div className={styles.tabs}>
        <TabItem
          label="List"
          isSelected={isListSelected}
          onTabItemClickHandler={() => setIsListSelected(true)}
        >
          <ListIcon
            classes={styles.image}
            color={isListSelected ? "white" : "black"}
          />
        </TabItem>
        <TabItem
          label="Grid"
          isSelected={!isListSelected}
          onTabItemClickHandler={() => setIsListSelected(false)}
        >
          <GridIcon
            classes={styles.image}
            color={isListSelected ? "black" : "white"}
          />
        </TabItem>
      </div>
    </div>
  );
};

export default ToggleList;
