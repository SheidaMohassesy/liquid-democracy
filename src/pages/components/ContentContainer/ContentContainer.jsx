import { useAppContext } from "@/contexts/AppContext";
import ToggleList from "../ToggleList/ToggleList";
import styles from "./ContentContainer.module.scss";
import ListView from "../ListView/ListView";
import GridView from "../GridView/GridView";
import Card from "../Card/Card";

const ContentContainer = () => {
  const { isListSelected } = useAppContext();

  const mockData = [
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img01.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img01.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
    {
      title: "Title of an external project - Starting in future",
      location: "Mitte",
      copyright: "copyright by photogr",
      image: "assets/images/mock-bk-res/img01.png",
      description:
        "Berlin Online Engagement: Empowering citizens to shape their city's future via digital platforms. Fostering dialogue, collaboration, and civic action for inclusivity.",
    },
  ];

  const mockCards = mockData.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      description={card.description}
      copyright={card.copyright}
      location={card.location}
      image={card.image}
    />
  ));
  return (
    <div className={styles.contentContainer}>
      <ToggleList />
      {isListSelected && <ListView>{mockCards}</ListView>}
      {!isListSelected && <GridView>{mockCards}</GridView>}
    </div>
  );
};

export default ContentContainer;
