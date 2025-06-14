import { type JSX } from 'react';
import styles from './main-layout.module.css';

function MainLayout({ children, className }: { children: JSX.Element[] | JSX.Element; className?: string }) {
    return <main className={`${styles['main-layout']} ${className}`}>{children}</main>;
}

export default MainLayout;
