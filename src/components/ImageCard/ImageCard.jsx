import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

function ImageCard({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img
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
