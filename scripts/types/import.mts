// Type-checks the built package as an ESM consumer sees it (npm run test:package)
import goldies, { type Goldies } from 'goldies';
import { dedupe } from 'goldies/array/dedupe';
import { isNil } from 'goldies/types/isNil';
import { isNull } from 'goldies/types/isNull';
import { isUndefined } from 'goldies/types/isUndefined';

const typed: Goldies = goldies;
const unique: number[] = goldies.array.dedupe([1, 1, 2]);
const fromSubpath: number[] = dedupe([1, 1, 2]);
const ratio: number = goldies.color.getContrastRatio('#000000', '#ffffff');
const external: boolean = goldies.types.isExternalUrl('https://example.com');

// @ts-expect-error fails if the types resolve to `any`
const wrong: string = goldies.array.dedupe([1]);

// The null checks are type guards, so the other branch narrows
declare const value: string | null | undefined;
const notNil: string = isNil(value) ? '' : value;
const notNull: string | undefined = isNull(value) ? undefined : value;
const notUndefined: string | null = isUndefined(value) ? null : value;

export { typed, unique, fromSubpath, ratio, external, wrong, notNil, notNull, notUndefined };
