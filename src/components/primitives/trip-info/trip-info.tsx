import styles from './trip-info.module.css';
import { type Level } from '~/types/types';

type TripInfoTestIds = Record<'headingId' | 'durationId' | 'levelId', string>;

type TripInfoProps = Readonly<{
    dataTestIds: TripInfoTestIds;
    title: string;
    duration: number;
    level: Level;
    className?: string;
}>;

function TripInfo({className, dataTestIds, title, duration, level }: TripInfoProps) {
    return (
        <div className={`${styles['trip-info']} ${className}`}>
            <h3 data-test-id={dataTestIds.headingId} className={styles['trip-info__title']}>
                {title}
            </h3>
            <div className={styles['trip-info__content']}>
                <span data-test-id={dataTestIds.durationId} className={styles['trip-info__duration']}>
                    <strong>{duration}</strong> days
                </span>
                <span data-test-id={dataTestIds.levelId} className={styles['trip-info__level']}>
                    {level}
                </span>
            </div>
        </div>
    );
}

export default TripInfo;
