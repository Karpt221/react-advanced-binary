import styles from './Select.module.css';

type OptionsItem = Readonly<{ value: string; text: string }>;

type SelectProps = Readonly<{
    name: string;
    isTitleHidden?: boolean;
    dataTestId: string;
    options: readonly OptionsItem[];
}>;

function Select({ name, isTitleHidden = true, dataTestId, options }: SelectProps) {
    return (
        <label className={styles.select}>
            <span className={isTitleHidden ? 'visually-hidden' : ''}>Search by {name}</span>
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
