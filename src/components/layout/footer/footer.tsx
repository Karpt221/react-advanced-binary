import styles from './footer.module.css';
import heartIcon from '~/assets/images/heart.svg';

function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer__text}>
                © 2025, from
                <a className={styles.footer__link} href="https://binary-studio.com">
                    binary studio
                </a>
                with
                <img className={styles.footer__icon} src={heartIcon} alt="heart" />
            </span>
        </footer>
    );
}

export default Footer;
