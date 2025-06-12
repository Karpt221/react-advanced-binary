import styles from './TripPrice.module.css';

type TripPriceProps = { price: number };

function TripPrice({ price }: TripPriceProps) {
    return (
        <div className={styles['trip-price']}>
            <span>Price</span>
            <strong className={styles['trip-price__value']}>${price}</strong>
        </div>
    );
}

export default TripPrice;
