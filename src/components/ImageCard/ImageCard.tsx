import Image from "../../types/Image";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <li onClick={onClick} className={styles.imageItem}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </li>
  );
};

export default ImageCard;
