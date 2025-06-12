import styles from './Select.module.css';

type SelectAttributes = {
    name: string;
    isTitleHidden?: boolean;
    dataTestId: string;
    options: { value: string; text: string }[];
};

function Select({ name, isTitleHidden = true, dataTestId, options }: SelectAttributes) {
    return (
        <label className={styles.select}>
            <span className={isTitleHidden ? 'visually-hidden' : ''}>Search by {name}</span>
            <select data-test-id={dataTestId} name={name}>
                <option key={name} value="">
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
