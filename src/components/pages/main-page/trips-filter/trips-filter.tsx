import styles from './trips-filter.module.css';
import Select from 'primitives/select/select';
import Input from 'primitives/input/input';
import { durationOptions, levelOptions } from '~/enums/enums';

function TripsFilter() {
    return (
        <section className={styles['trips-filter']}>
            <h2 className="visually-hidden">Trips filter</h2>
            <form className={styles['trips-filter__form']} autoComplete="off">
                <Input
                    heading="Search by name"
                    headingClassName="visually-hidden"
                    dataTestId="filter-search"
                    type="search"
                    other={{ placeholder: 'search by title' }}
                />
                <Select name="duration" dataTestId="filter-duration" options={durationOptions} />
                <Select name="level" dataTestId="filter-level" options={levelOptions} />
            </form>
        </section>
    );
}

export default TripsFilter;
