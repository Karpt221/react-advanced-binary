import styles from './button.module.css';

type ButtonProps = Readonly<{
    dataTestId: string;
    type?: 'submit' | 'reset' | 'button';
    children: string;
    onClick?: (...parameters: unknown[]) => unknown;
    className?: string;
}>;

function Button({ dataTestId, onClick, type = 'button', children, className = '' }: ButtonProps) {
    return (
        <button onClick={onClick} data-test-id={dataTestId} className={`${styles.button} ${className}`} type={type}>
            {children}
        </button>
    );
}

export default Button;
