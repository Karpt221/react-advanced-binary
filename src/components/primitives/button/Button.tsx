import styles from './Button.module.css';

type ButtonProps = Readonly<{ dataTestId: string; type: 'submit' | 'reset' | 'button'; children: string }>;

function Button({ dataTestId, type, children }: ButtonProps) {
    return (
        <button data-test-id={dataTestId} className={styles.button} type={type}>
            {children}
        </button>
    );
}

export default Button;
