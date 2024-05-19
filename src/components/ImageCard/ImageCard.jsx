import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import css from "../ImageCard/ImageCard.module.css";
function ImageCard({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img
        className={css.imgStyle}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => setIsModalOpen(true)}
      />
      <ImageModal
        imageUrl={image.urls.regular}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ImageCard;
