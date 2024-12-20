import { useAppContext } from "@/contexts/AppContext";
import ToggleList from "../ToggleList/ToggleList";
import styles from "./ContentContainer.module.scss";
import ListView from "../ListView/ListView";
import GridView from "../GridView/GridView";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const ContentContainer = () => {
  const { isListSelected } = useAppContext();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/mockEndpoint");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        if (result) {
          setCards(result);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const mockCards = cards.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      description={card.description}
      copyright={card.copyright}
      location={card.location}
      image={card.image}
      days={card.days}
    />
  ));
  return (
    <div
      className={styles.contentContainer}
      role="region"
      aria-labelledby="contentContainerTitle"
    >
      <ToggleList aria-label="Toggle between list and grid view" />
      {isListSelected && (
        <ListView aria-labelledby="listViewTitle">{mockCards}</ListView>
      )}
      {!isListSelected && (
        <GridView aria-labelledby="gridViewTitle">{mockCards}</GridView>
      )}
    </div>
  );
};

export default ContentContainer;
