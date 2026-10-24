// Type-checks the built package as an ESM consumer sees it (npm run test:package)
import goldies, { type Goldies } from 'goldies';
import { dedupe } from 'goldies/array/dedupe';
import { filter } from 'goldies/object/filter';
import { omit } from 'goldies/object/omit';
import { pick } from 'goldies/object/pick';
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

// The object utilities take interface types, which have no index signature
interface User {
  id: number;
  name: string;
  password: string;
}
declare const user: User;
const picked: { name: string } = pick(user, ['name']);
const filtered: Partial<User> = filter(user, (value) => value !== '');
const safe: { id: number; name: string } = omit(user, ['password']);
// @ts-expect-error omit removes the property from the type
omit(user, ['password']).password;

// Debounced and throttled functions keep the argument types
const search = goldies.utils.debounce((query: string) => query.length, 300);
search('goldies');
// @ts-expect-error wrong argument type
search(42);
search.cancel();
const onScroll = goldies.utils.throttle(() => {}, 100);
onScroll.flush();
const retried: Promise<number> = goldies.utils.retry(async (attempt) => attempt * 2);
const chunks: number[][] = goldies.array.chunk([1, 2, 3], 2);

export {
  typed,
  unique,
  fromSubpath,
  ratio,
  external,
  wrong,
  notNil,
  notNull,
  notUndefined,
  picked,
  filtered,
  safe,
  retried,
  chunks,
};
