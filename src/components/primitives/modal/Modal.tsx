import { type JSX } from 'react';
import styles from './Modal.module.css';

type ModalProps = { isHidden: boolean; children: JSX.Element };

function Modal({ isHidden = true, children }: ModalProps) {
    return (
        <div hidden={isHidden}>
            <div className={styles.modal}>{children}</div>
        </div>
    );
}

export default Modal;
