import Image from "../../types/Image";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className={styles.imageList}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => openModal(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
