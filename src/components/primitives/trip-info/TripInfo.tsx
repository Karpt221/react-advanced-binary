import styles from './TripInfo.module.css';
import { type Levels } from '../../../types/types';

type TripInfoProps = { title: string; duration: number; level: Levels };

function TripInfo({ title, duration, level }: TripInfoProps) {
    return (
        <div className={styles['trip-info']}>
            <h3 className={styles['trip-info__title']}>{title}</h3>
            <div className={styles['trip-info__content']}>
                <span className={styles['trip-info__duration']}>
                    <strong>{duration}</strong> days
                </span>
                <span className={styles['trip-info__level']}>{level}</span>
            </div>
        </div>
    );
}

export default TripInfo;
