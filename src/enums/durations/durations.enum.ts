const DURATIONS = [
    { value: '0_x_5', text: '\u003C 5 days' } as const,
    { value: '0_x_10', text: '\u003C 10 days' } as const,
    { value: '10', text: '\u2265 10 days' } as const,
] as const;

export { DURATIONS };
