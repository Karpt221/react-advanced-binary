import { DURATIONS } from '~/enums/enums';

type Duration = (typeof DURATIONS)[keyof typeof DURATIONS]['value'];

export { type Duration };
