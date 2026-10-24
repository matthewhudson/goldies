// Type-checks the built package as a require() consumer sees it (npm run test:package).
// require('goldies') returns the namespace object, so the types must too, not `.default`.
// eslint-disable-next-line @typescript-eslint/no-require-imports -- the form under test
import goldies = require('goldies');
import { dedupe } from 'goldies/array/dedupe';

const unique: number[] = goldies.array.dedupe([1, 1, 2]);
const fromSubpath: number[] = dedupe([1, 1, 2]);
const port: Promise<number> = goldies.node.getAvailablePort();

// @ts-expect-error fails if the types resolve to `any`
const wrong: string = goldies.array.dedupe([1]);

export { unique, fromSubpath, port, wrong };
