import styles from './input.module.css';

type InputProps = Readonly<{
    heading: string;
    type: string;
    dataTestId: string;
    other?: Readonly<Record<string, string | number | boolean>>;
    labelClassName?: string;
    headingClassName?: string;
}>;

function Input({ dataTestId, heading, type, labelClassName = '', headingClassName = '', other }: InputProps) {
    return (
        <label className={`${styles.input} ${labelClassName}`}>
            <span className={`${styles.input__heading} ${headingClassName}`}>{heading}</span>
            <input data-test-id={dataTestId} name={type} type={type} {...other} />
        </label>
    );
}

export default Input;
