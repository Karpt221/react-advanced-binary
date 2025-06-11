import styles from './Input.module.css';

function Input({ heading, type, other }: { heading: string; type: string; other: Record<string, string | number> }) {
    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{heading}</span>
            <input name={type} type={type} required {...other} />
        </label>
    );
}

export default Input;
