const LEVELS = {
    EASY: 'easy',
    MODERATE: 'moderate',
    DIFFICULT: 'difficult',
} as const;

const levelOptions = Object.values(LEVELS).map((level: string) => {
    return { value: level, text: level } as const;
});

export { LEVELS, levelOptions };
