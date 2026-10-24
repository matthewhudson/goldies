// Type-checks the built package as an ESM consumer sees it (npm run test:package)
import goldies, { type Goldies } from 'goldies';
import { dedupe } from 'goldies/array/dedupe';

const typed: Goldies = goldies;
const unique: number[] = goldies.array.dedupe([1, 1, 2]);
const fromSubpath: number[] = dedupe([1, 1, 2]);

// @ts-expect-error fails if the types resolve to `any`
const wrong: string = goldies.array.dedupe([1]);

export { typed, unique, fromSubpath, wrong };
