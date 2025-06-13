import styles from './TripPrice.module.css';

type TripPriceProps = { dataTestId: string; price: number; className: string };

function TripPrice({ dataTestId, price, className = '' }: TripPriceProps) {
    return (
        <div className={`${styles['trip-price']} ${className}`}>
            <span>Price</span>
            <strong data-test-id={dataTestId} className={styles['trip-price__value']}>
                ${price}
            </strong>
        </div>
    );
}

export default TripPrice;
