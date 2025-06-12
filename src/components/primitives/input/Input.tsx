import styles from './Input.module.css';

type InputProps = Readonly<{
    heading: string;
    type: string;
    dataTestId: string;
    other: Readonly<Record<string, string | number | boolean>>;
}>;

function Input({ dataTestId, heading, type, other }: InputProps) {
    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{heading}</span>
            <input data-test-id={dataTestId} name={type} type={type} {...other} />
        </label>
    );
}

export default Input;
