import styles from './Input.module.css';

type InputProps = Readonly<{
    heading: string;
    type: string;
    other: Readonly<Record<string, string | number | boolean>>;
}>;

function Input({ heading, type, other }: InputProps) {
    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{heading}</span>
            <input name={type} type={type} {...other} />
        </label>
    );
}

export default Input;
