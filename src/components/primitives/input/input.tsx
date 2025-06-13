import styles from './input.module.css';

type InputProps = Readonly<{
    heading: string;
    type: string;
    dataTestId: string;
    other: Readonly<Record<string, string | number | boolean>>;
    className?: string;
}>;

function Input({ dataTestId, heading, type, className = '', other }: InputProps) {
    return (
        <label className={`${styles.input} ${className}`}>
            <span className={styles.input__heading}>{heading}</span>
            <input data-test-id={dataTestId} name={type} type={type} {...other} />
        </label>
    );
}

export default Input;
