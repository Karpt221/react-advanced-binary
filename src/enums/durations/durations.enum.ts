const DURATIONS = {
    LESS_THAN_FIVE_DAYS: { value: '0_x_5', text: '\u003C 5 days' },
    LESS_THAN_TEN_DAYS: { value: '0_x_10', text: '\u003C 10 days' },
    TEN_OR_MORE_DAYS: { value: '10', text: '\u2265 10 days' },
} as const;

const durationOptions = Object.values(DURATIONS);

export { DURATIONS, durationOptions };
