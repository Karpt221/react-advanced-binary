import styles from './TripPrice.module.css';

type TripPriceProps = { dataTestId: string; price: number };

function TripPrice({ dataTestId, price }: TripPriceProps) {
    return (
        <div className={styles['trip-price']}>
            <span>Price</span>
            <strong data-test-id={dataTestId} className={styles['trip-price__value']}>
                ${price}
            </strong>
        </div>
    );
}

export default TripPrice;
