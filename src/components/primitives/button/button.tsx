import styles from './button.module.css';

type ButtonProps = Readonly<{
    dataTestId: string;
    type?: 'submit' | 'reset' | 'button';
    children: string;
    className?: string;
}>;

function Button({ dataTestId, type='button', children, className = '' }: ButtonProps) {
    return (
        <button data-test-id={dataTestId} className={`${styles.button} ${className}`} type={type}>
            {children}
        </button>
    );
}

export default Button;
