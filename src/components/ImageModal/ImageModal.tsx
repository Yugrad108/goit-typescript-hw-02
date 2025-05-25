import Image from "../../types/Image";
import styles from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image | null;
  closeModal: () => void;
}

const ImageModal = ({ closeModal, image }: ImageModalProps) => {
  if (!image) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  console.log("imageMod", image);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={closeModal}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <div className={styles.overlay} onClick={handleBackdropClick}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className={styles.info}>
            <span>{image.likes} likes, </span>
            <span>{image.description}, </span>
            <span>Author: {image.user?.name} </span>
          </div>
          <button className={styles.modalCloseButton} onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
