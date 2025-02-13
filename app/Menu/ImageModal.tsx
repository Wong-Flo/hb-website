import Image from 'next/image';
import { FC } from 'react';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  src,
  alt,
  width,
  height,
  onClose,
}) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.modalImage}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ImageModal;
