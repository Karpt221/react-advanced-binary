import styles from './select.module.css';

type OptionsItem = Readonly<{ value: string; text: string }>;

type SelectProps = Readonly<{
    name: string;
    isHeadingHidden?: boolean;
    dataTestId: string;
    options: readonly OptionsItem[];
    className?: string;
}>;

function Select({ name, isHeadingHidden = true, className = '', dataTestId, options }: SelectProps) {
    return (
        <label className={`${styles.select} ${className}`}>
            <span className={isHeadingHidden ? 'visually-hidden' : ''}>Search by {name}</span>
            <select data-test-id={dataTestId} name={name}>
                <option defaultChecked key={name} value="">
                    {name}
                </option>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    );
                })}
            </select>
        </label>
    );
}

export default Select;
