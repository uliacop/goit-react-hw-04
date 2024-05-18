import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";
/* const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Modal Image" />
      <button onClick={onClose} className={css.closeBtn}>
        &times;
      </button>
    </Modal>
  );
};

export default ImageModal;
 */

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0, // Додано, щоб зняти відступи
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeBtn}>
          &times;
        </button>
        <img src={imageUrl} alt="Modal Image" className={css.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;
