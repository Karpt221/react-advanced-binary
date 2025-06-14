import { type JSX } from 'react';
import styles from './modal.module.css';

type ModalProps = Readonly<{ visibility: boolean; children: JSX.Element }>;

function Modal({ visibility = true, children }: ModalProps) {
    return (
        <div hidden={!visibility}>
            <div className={styles.modal}>{children}</div>
        </div>
    );
}

export default Modal;
