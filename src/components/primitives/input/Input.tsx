import styles from './Input.module.css';

type InputAttributes = { heading: string; type: string; other: Record<string, string | number | boolean> };

function Input({ heading, type, other }: InputAttributes) {
    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{heading}</span>
            <input name={type} type={type} {...other} />
        </label>
    );
}

export default Input;
