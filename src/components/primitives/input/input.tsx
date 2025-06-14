import styles from './input.module.css';

type InputProps = Readonly<{
    heading: string;
    type: string;
    dataTestId: string;
    other?: Readonly<Record<string, string | number | boolean>>;
    className?: string;
    isHeadingHidden?: boolean;
}>;

function Input({ dataTestId, heading, type, className = '', isHeadingHidden = false, other }: InputProps) {
    const hiddenValue = isHeadingHidden ? 'visually-hidden' : '';
    return (
        <label className={`${styles.input} ${className}`}>
            <span className={`${styles.input__heading} ${hiddenValue}`}>{heading}</span>
            <input data-test-id={dataTestId} name={type} type={type} {...other} />
        </label>
    );
}

export default Input;
