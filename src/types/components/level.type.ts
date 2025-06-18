import { LEVELS } from '~/enums/enums';

type Level = (typeof LEVELS)[keyof typeof LEVELS] | '';

export { type Level };
