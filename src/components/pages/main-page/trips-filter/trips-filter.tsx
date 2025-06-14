import styles from './trips-filter.module.css';
import Select from 'primitives/select/select';
import Input from 'primitives/input/input';
import { durationOptions, levelOptions } from '~/enums/enums';
import type { Duration, Level } from '~/types/types';
import { useEffect, useState } from 'react';
import React from 'react';

type TripsFilterProps = { handleFilter: (title: string, duration: Duration, level: Level) => void };

function TripsFilter({ handleFilter }: TripsFilterProps) {
    const [titleValue, setTitleValue] = useState('');
    const [durationValue, setDurationValue] = useState<Duration>('');
    const [levelValue, setLevelValue] = useState<Level>('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitleValue(event.target.value);
    const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        setDurationValue(event.target.value as Duration);
    const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        setLevelValue(event.target.value as Level);

    useEffect(() => {
        handleFilter(titleValue, durationValue, levelValue);
    }, [titleValue, durationValue, levelValue, handleFilter]);

    return (
        <section className={styles['trips-filter']}>
            <h2 className="visually-hidden">Trips filter</h2>
            <form className={styles['trips-filter__form']} autoComplete="off">
                <Input
                    onChange={handleTitleChange}
                    heading="Search by name"
                    isHeadingHidden={true}
                    dataTestId="filter-search"
                    type="search"
                    other={{ placeholder: 'search by title' }}
                    className={styles['trips-filter__search']}
                />
                <Select
                    onChange={handleDurationChange}
                    name="duration"
                    dataTestId="filter-duration"
                    options={durationOptions}
                />
                <Select onChange={handleLevelChange} name="level" dataTestId="filter-level" options={levelOptions} />
            </form>
        </section>
    );
}

export default React.memo(TripsFilter);
