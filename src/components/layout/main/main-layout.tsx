import { type JSX } from 'react';
import styles from './main-layout.module.css';

function Main({ children }: { children: JSX.Element }) {
    return <main className={styles['flex-grow']}>{children}</main>;
}

export default Main;
