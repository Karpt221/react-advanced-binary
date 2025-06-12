import { LEVELS } from '../../enums/enums';

type Levels = (typeof LEVELS)[keyof typeof LEVELS];

export { type Levels };
