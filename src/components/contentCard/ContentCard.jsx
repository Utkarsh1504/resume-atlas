/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./content-card.module.css";

const IconComponent = ({ icon: Icon }) => {
  return <Icon />;
};

const ContentCard = ({getIcon, getTitle, setShowCard, setShowModal, ...content }) => {
  return (
    <div className={styles.card_container} onClick={() => {
      getIcon(content.icon);
      getTitle(content.title);
      setShowCard(true);
      setShowModal(false);
    }}>
      <h2 className={styles.title}>
        <IconComponent icon={content.icon} />
        {content.title}
      </h2>
      <div className={styles.desc}>{content.desc}</div>
    </div>
  );
};

export default ContentCard;
