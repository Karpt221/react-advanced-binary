import styles from './Button.module.css';

type ButtonProps = Readonly<{ type: 'submit' | 'reset' | 'button'; children: string }>;

function Button({ type, children }: ButtonProps) {
    return (
        <button className={styles.button} type={type}>
            {children}
        </button>
    );
}

export default Button;
